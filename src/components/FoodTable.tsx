import { Food } from "@/types/food";

export default async function FoodTable() {
    
    const getFood = async () => {
        const response = await fetch("http://localhost:3000/api/essen");

        if (!response.ok) {
            return [];
        }

        const data = await response.json() as Food[];
        return data;
    }

    const food = await getFood();

    if (food.length === 0) {
        return <div>Kein Essen vorhanden</div>;
    }

    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Beschreibung</th>
                </tr>
            </thead>
            <tbody>
                {food.map((f) => (
                    <tr key={f.id}>
                        <td className="border px-4 py-2">{f.name}</td>
                        <td className="border px-4 py-2">{f.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

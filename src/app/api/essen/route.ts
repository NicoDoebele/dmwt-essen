import { query } from "@/lib/db";
import { NextRequest } from "next/server";

// Path: /api/essen

export async function GET(req: NextRequest) {
  try {
    const results = await query({
        query: "SELECT * FROM essen",
        values: [],
    });
    return new Response(JSON.stringify(results), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    try {
        const { name, description } = await req.json();
        const results = await query({
            query: "INSERT INTO essen (name, description) VALUES (?, ?)",
            values: [name, description],
        });
        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (e) {
        return new Response(null, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const { name, description, id } = await req.json();
        const results = await query({
            query: "UPDATE essen SET name = ?, description = ? WHERE id = ?",
            values: [name, description, id],
        });
        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (e) {
        return new Response(null, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        const results = await query({
            query: "DELETE FROM essen WHERE id = ?",
            values: [id],
        });
        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (e) {
        return new Response(null, { status: 500 });
    }
}
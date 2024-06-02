/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        "DB_HOST": "localhost",
        "DB_PORT": "3306",
        "DB_DATABASE": "dmwt-essen",
        "DB_USER": "root",
        "DB_PASSWORD": ""
    }
};

export default nextConfig;

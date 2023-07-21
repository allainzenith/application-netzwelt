/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source: "/",
                destination: "/account/login",
                permanent: false,
            }
        ]
    }
}



module.exports = nextConfig

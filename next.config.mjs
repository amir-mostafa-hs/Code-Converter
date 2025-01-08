/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // حالت استاتیک
  assetPrefix: "/", // تنظیم مسیر فایل‌ها برای Electron
  trailingSlash: true, // اطمینان از اینکه مسیرها به درستی مشخص هستند
};

export default nextConfig;

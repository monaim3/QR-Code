import { useAppSelector } from "@/store/hooks";

const WifiPreview: React.FC = ({}) => {
  const wifi = useAppSelector((state) => state.wifi.NetworkName);
  const wifiPassword = useAppSelector((state) => state.wifi.Password);
  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-[55%] bg-[#7BA2EF]" />
      <div className=" pt-16  text-center relative">
        <div className="text-white/80 text-[10px] font-normal  leading-[16px] mb-1">
          Connect to a network
        </div>
        <h2 className="text-white text-lg font-bold leading-[26px] break-words  tracking-tight">
          {wifi}
        </h2>
      </div>

      <div className="bg-white p-2 mx-5 mt-10 relative  z-10 p-2flex flex-col items-center shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] rounded-[6px]">
        <div className=" w-[204px] h-[204px]  flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="54"
            viewBox="0 0 70 54"
            fill="none"
            className="opacity-90"
          >
            <path
              d="M39.6697 51.3517C40.2899 50.7341 40.7821 50.0001 41.1179 49.1918C41.4537 48.3836 41.6266 47.5169 41.6266 46.6417C41.6266 45.7664 41.4537 44.8998 41.1179 44.0915C40.7821 43.2832 40.2899 42.5492 39.6697 41.9317C39.0524 41.31 38.3184 40.8165 37.5097 40.4795C36.7011 40.1425 35.8338 39.9687 34.9577 39.9681C34.0817 39.9675 33.2141 40.14 32.405 40.4759C31.5959 40.8117 30.8611 41.3042 30.243 41.925C29.6063 42.54 29.0984 43.2756 28.749 44.089C28.3996 44.9023 28.2157 45.7771 28.208 46.6623C28.2003 47.5475 28.369 48.4254 28.7042 49.2447C29.0394 50.064 29.5344 50.8083 30.1604 51.4343C30.7863 52.0602 31.5307 52.5553 32.35 52.8905C33.1693 53.2257 34.0472 53.3944 34.9324 53.3867C35.8176 53.379 36.6924 53.1951 37.5057 52.8457C38.3191 52.4963 39.0547 51.9884 39.6697 51.3517ZM63.2397 25.0283C62.364 25.03 61.4967 24.8582 60.6877 24.5229C59.8787 24.1877 59.1442 23.6956 58.5263 23.075C45.5297 10.0783 24.383 10.0817 11.383 23.075C10.1325 24.3255 8.43648 25.028 6.66802 25.028C4.89955 25.028 3.20351 24.3255 1.95302 23.075C0.702521 21.8245 0 20.1285 0 18.36C0 16.5915 0.702521 14.8955 1.95302 13.645C20.1497 -4.54833 49.7564 -4.54833 67.9497 13.645C68.8827 14.577 69.5183 15.7647 69.7762 17.058C70.0341 18.3513 69.9026 19.692 69.3984 20.9105C68.8942 22.1291 68.04 23.1707 66.9437 23.9037C65.8474 24.6367 64.5584 25.028 63.2397 25.0283ZM20.813 39.1683C19.4947 39.168 18.206 38.7769 17.11 38.0443C16.0139 37.3118 15.1596 36.2707 14.6552 35.0527C14.1507 33.8347 14.0187 32.4945 14.2758 31.2015C14.5329 29.9084 15.1676 28.7207 16.0997 27.7883C26.493 17.3917 43.413 17.3917 53.8097 27.7883C55.0602 29.0388 55.7627 30.7349 55.7627 32.5033C55.7627 34.2718 55.0602 35.9678 53.8097 37.2183C52.5592 38.4688 50.8632 39.1713 49.0947 39.1713C47.3262 39.1713 45.6302 38.4688 44.3797 37.2183C41.877 34.7218 38.4863 33.3197 34.9513 33.3197C31.4164 33.3197 28.0257 34.7218 25.523 37.2183C24.9053 37.8379 24.1712 38.3292 23.3628 38.6638C22.5545 38.9985 21.6879 39.17 20.813 39.1683Z"
              fill="#D3D8EB"
            />
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-2">
          <button className="w-full px-8 py-2 rounded-md bg-[#0A0909] text-white text-xs leading-[20px] font-normal border border-[#0A0909] hover:bg-[#1a1919] active:scale-[0.98] transition-all duration-150">
            Connect
          </button>

          <button className="w-full px-8 py-2 rounded-md bg-white text-[#0A0909] text-xs leading-[20px] font-normal  border border-[#0A0909] hover:bg-black hover:text-white active:scale-[0.98] transition-all duration-150">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WifiPreview;

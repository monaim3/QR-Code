function QRPreview({ mobileQrRef }: any) {
  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white">
      <div className="w-full h-full flex flex-col items-center justify-center bg-white p-8">
        <div className="bg-white p-6 ">
          <div ref={mobileQrRef} className="flex items-center justify-center" />
        </div>
      </div>
    </div>
  );
}

export default QRPreview;

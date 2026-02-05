"use client";

import { useEffect, useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import QRCodeStyling, { Options } from "qr-code-styling";

interface WifiQRCodeProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function WifiQRCode({
  width = 154,
  height = 154,
  className = "",
}: WifiQRCodeProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  const wifi = useAppSelector((state) => state.wifi.NetworkName);
  const wifiPassword = useAppSelector((state) => state.wifi.Password);
  const wifiEncryption = useAppSelector((state) => state.wifi.EncryptionType);
  const wifiHidden = useAppSelector((state) => state.wifi.HiddenNetwork);

  const escapeWifiString = (str: string): string => {
    return str.replace(/[\\"';:,]/g, (char) => `\\${char}`);
  };

  const generateWifiString = (): string => {
    const encryptionMap: { [key: string]: string } = {
      WEP: "WEP",
      "WPA / WPA2": "WPA",
      "WPA - EAP": "WPA",
      NONE: "nopass",
    };

    const encryptionType = encryptionMap[wifiEncryption] || "WPA";
    const networkName = escapeWifiString(wifi);
    const password = escapeWifiString(wifiPassword);
    const hidden = wifiHidden ? "true" : "false";

    return `WIFI:T:${encryptionType};S:${networkName};P:${password};H:${hidden};;`;
  };

  useEffect(() => {
    if (!qrRef.current) return;

    const wifiString = generateWifiString();

    const qrOptions: Options = {
      type: "svg",
      data: wifiString,
      margin: 10,
      width: width,
      height: height,
      dotsOptions: {
        color: "#000000",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#FFFFFF",
      },
      cornersSquareOptions: {
        color: "#000000",
        type: "square",
      },
      cornersDotOptions: {
        color: "#000000",
        type: "square",
      },
    };

    if (qrRef.current) {
      qrRef.current.innerHTML = "";

      if (qrCodeRef.current) {
        qrCodeRef.current.update(qrOptions);
        qrCodeRef.current.append(qrRef.current);
      } else {
        qrCodeRef.current = new QRCodeStyling(qrOptions);
        qrCodeRef.current.append(qrRef.current);
      }
    }
  }, [wifi, wifiPassword, wifiEncryption, wifiHidden, width, height]);

  return (
    <div className="w-full h-full flex items-center justify-center rounded-[32px]">
      <div
        ref={qrRef}
        className={`flex items-center justify-center ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
}

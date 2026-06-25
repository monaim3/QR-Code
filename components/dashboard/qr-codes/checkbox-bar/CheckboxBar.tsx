import Download from "@/components/icons/download";
import IconButton from "./IconButton";
import PauseCircle from "@/components/icons/pause-circle";
import RefreshCw from "@/components/icons/refresh-cw";
import TrashAlt from "@/components/icons/trash-alt";
import Close from "@/components/icons/close";
import { useAppSelector } from "@/store/hooks";
import { useDeleteQrCodesMutation, 
  useResetQrScansMutation, 
  useDeactivateQrCodesMutation, 
  useActivateQrCodesMutation } from "@/store/api/qrCodesApi";

interface Props {
  selectedCount: number;
  ids: string[];
  onClose: () => void;
}

export default function CheckboxBar({ selectedCount, ids, onClose }: Props) {
  const collapsed = useAppSelector((state) => state.sidebar.collapsed);

    const [deleteQrCodes, { isLoading }] = useDeleteQrCodesMutation();
    const [resetQrScans] = useResetQrScansMutation();
    const [deactivateQrCodes] = useDeactivateQrCodesMutation();
    const [activateQrCodes] = useActivateQrCodesMutation();

  const desktopPositionClasses = collapsed
    ? "desktopDashboard:left-[72px] left-0 desktopDashboard:max-w-[calc(100vw-72px)] max-w-full"
    : "desktopDashboard:left-[214px] left-0 desktopDashboard:max-w-[calc(100vw-214px)] max-w-full";



const handleResetScans = async () => {
  try {
    await resetQrScans({
      ids: ids,
    }).unwrap();
  } catch (err) {
    console.error(err);
  }
};

 const handleDeactivate = async () => {
  try {
    await deactivateQrCodes({
      ids: ids,
    }).unwrap();
  } catch (err) {
    console.error(err);
  }
  };

  const handleActivate = async () => {
  try {
    await activateQrCodes({
      ids: ids,
    }).unwrap();
  } catch (err) {
    console.error(err);
  }
};

const handleDelete = async () => {
  try {
    const response = await deleteQrCodes({
      ids: ids,
    }).unwrap();

    console.log(response.message);
  } catch (error) {
    console.error(error);
  }
  };


  return (
    <div
      className={`
        fixed bottom-0 w-full flex items-center justify-center gap-10 py-4 px-5
        desktopDashboard:px-6 bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]
        transition-all duration-300
        ${desktopPositionClasses}
      `}
    >
      {/* Portfolio */}
      <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:hidden">
        {selectedCount}
      </p>
      <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:block hidden">
        <span className="text-[var(--Dark-gray)]">{selectedCount}</span> items
        selected
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2 flex-1">
        <IconButton
          icon={<Download className="text-[var(--Dark-gray)]" />}
          text="Download"
        />
        <IconButton icon={<PauseCircle />} text="Pause" onClick={handleDeactivate} />
        <IconButton icon={<RefreshCw />} text="Reset scans"  onClick={handleResetScans} />
        <IconButton
          icon={<TrashAlt className="text-[var(--error)]" />}
          text="Delete"
          variant="error"
          onClick={handleDelete}
        />
      </div>

      {/* Close */}
      <button onClick={onClose}>
        <Close />
      </button>
    </div>
  );
}

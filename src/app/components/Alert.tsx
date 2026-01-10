interface AlertProps {
  title: string;
  message: string;
  cancelText?: string;
  confirmText: string;
  onCancel: () => void;
  onConfirm: () => void;
  isDestructive?: boolean;
}

export function Alert({
  title,
  message,
  cancelText = "Отменить",
  confirmText,
  onCancel,
  onConfirm,
}: AlertProps) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center p-8 z-50">
      <div 
        className="backdrop-blur-[11px] bg-[#1a1a1a] flex flex-col rounded-[14px] w-[270px]"
        style={{ backdropFilter: 'blur(11px)' }}
      >
        {/* Content */}
        <div className="flex flex-col items-center p-4">
          <div className="flex flex-col gap-[2px] items-center text-[#f3eadf] text-center w-full">
            <p 
              className="text-[17px] leading-[22px] tracking-[-0.408px] w-full font-semibold"
              style={{ fontFamily: 'var(--font-main)' }}
            >
              {title}
            </p>
            <p 
              className="text-[13px] leading-[18px] tracking-[-0.078px] w-full"
              style={{ fontFamily: 'var(--font-main)' }}
            >
              {message}
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[0.5px] w-full bg-[rgba(60,60,67,0.36)]" />

        {/* Actions */}
        <div className="flex gap-[0.5px] h-[44px] items-start w-full">
          {/* Cancel Button */}
          <button
            onClick={onCancel}
            className="flex-1 h-full flex items-center justify-center"
          >
            <div 
              className="text-[#ffc90c] text-[17px] leading-[22px] tracking-[-0.408px]"
              style={{ fontFamily: 'var(--font-main)' }}
            >
              {cancelText}
            </div>
          </button>

          {/* Separator */}
          <div className="bg-[rgba(255,255,255,0.2)] h-full w-[0.5px]" />

          {/* Confirm Button */}
          <button
            onClick={onConfirm}
            className="flex-1 h-full flex items-center justify-center"
          >
            <div 
              className="text-[#ffc90c] text-[17px] leading-[22px] tracking-[-0.408px] font-semibold"
              style={{ fontFamily: 'var(--font-main)' }}
            >
              {confirmText}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

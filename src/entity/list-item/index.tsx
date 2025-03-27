
interface ListItemProps {
  icon: string;
  text: string;
  className?: string;
}

export default function ListItem({ icon, text, className }: ListItemProps) {
  return <div className={`w-[392px] h-[59px] p-[6px] bg-white rounded-[42px] border border-[rgba(195,195,195,0.32)] flex items-center justify-start ${className}`}>
    <div className="w-[84px] h-[47px] rounded-[36px] bg-gradient-to-b from-[#DCC26B] via-[rgba(234,220,154,0.85)] via-[47%] to-[#BC973C] flex items-center justify-center">
      <img src={icon} alt={text} />
    </div>
    <p className="text-[#1C1C1C] text-[18px] font-medium text-center w-full">{text}</p>
  </div>
}
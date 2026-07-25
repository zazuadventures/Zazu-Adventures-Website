function FeatureCard({ title, subtitle }) {
  return (
    <div className="text-center p-6 ">
      <h3 className="mt-4 text-[#333333] font-bold text-xl">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{subtitle}</p>
    </div>
  );
}

export default FeatureCard;
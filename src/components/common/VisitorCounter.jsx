import { useEffect, useState } from "react";
import { useGetFooterQuery, usePostVisitorCountMutation } from "../../redux/services/bannerApi";

export default function VisitorCounter() {
  const { data, refetch } = useGetFooterQuery();
  const [postVisitorCount] = usePostVisitorCountMutation();
  const [lastUpdated, setLastUpdated] = useState(null);

  // POST to track-visitor on mount, then refetch footer to get updated counts
  useEffect(() => {
    postVisitorCount()
      .finally(() => {
        refetch();
        setLastUpdated(new Date());
      });
  }, []);

  const visitors = data?.visitors_count;
  const total   = visitors?.total_visitors   ?? 0;
  const today   = visitors?.today_visitors   ?? 0;
  const online  = visitors?.online_visitors  ?? 0;

  // Pad total to 8 digits for the digit boxes
  const digits = String(total).padStart(8, "0").split("");

  const fmt = (d) =>
    d
      ? d.toLocaleDateString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" }) +
        ", " +
        d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      : "";

  return (
    <div className="visitor-counter">
      <div className="vc-label">Visitor Count:</div>

      <div className="vc-digits">
        {digits.map((d, i) => (
          <div key={i} className="vc-digit">{d}</div>
        ))}
      </div>

      <div className="vc-hits">HITS</div>

      <div className="vc-stats">
        <span><i className="fas fa-users" /> Today: {today}</span>
        <span><i className="fas fa-circle vc-online" /> Online: {online}</span>
      </div>

      {lastUpdated && (
        <div className="vc-updated">Last updated: {fmt(lastUpdated)}</div>
      )}
    </div>
  );
}

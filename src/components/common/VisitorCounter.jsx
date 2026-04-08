import { useEffect, useState } from "react";
import { useGetVisitorCountQuery, usePostVisitorCountMutation } from "../../redux/services/bannerApi";

export default function VisitorCounter() {
  const { data, refetch } = useGetVisitorCountQuery();
  const [postVisitorCount] = usePostVisitorCountMutation();
  const [lastUpdated, setLastUpdated] = useState(null);

  // POST on mount to increment count
  useEffect(() => {
    postVisitorCount()
      .then(() => {
        refetch();
        setLastUpdated(new Date());
      })
      .catch(() => {
        refetch();
        setLastUpdated(new Date());
      });
  }, []);

  const count = data?.count ?? data?.visitor_count ?? data?.total ?? 0;
  const digits = String(count).padStart(8, "0").split("");

  return (
    <div className="visitor-counter">
      <div className="vc-label">Visitor Count:</div>
      <div className="vc-digits">
        {digits.map((d, i) => (
          <div key={i} className="vc-digit">{d}</div>
        ))}
      </div>
      <div className="vc-hits">HITS</div>
      {lastUpdated && (
        <div className="vc-updated">
          Last updated: {lastUpdated.toLocaleString()}
        </div>
      )}
    </div>
  );
}

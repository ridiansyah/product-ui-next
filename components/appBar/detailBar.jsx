import React from "react";
import { useRouter } from "next/navigation";

export default function DetailBar() {
  const router = useRouter();
  return (
    <div className="card mb-18 detail-card-title">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <a className="btn light" onClick={() => router.push("/")}>
              &#8592;{" Back"}
            </a>
          </div>
          <div className="col-6">
            <h3 className="text-right font-bold my-0">My Store</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

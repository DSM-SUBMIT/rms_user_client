import React, { FC, Suspense } from "react";
import { WriteReport } from "../../components";


const WriteReportContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WriteReport />
    </Suspense>
  );
};

export default WriteReportContainer;
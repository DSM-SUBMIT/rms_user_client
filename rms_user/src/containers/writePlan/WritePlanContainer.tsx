import React, { FC, Suspense } from "react";
import { WritePlan } from "../../components";

const WritePlanContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WritePlan />
    </Suspense>
  );
};

export default WritePlanContainer;
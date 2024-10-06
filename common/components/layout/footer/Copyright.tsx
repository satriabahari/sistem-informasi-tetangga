import React from "react";

const Copyright = () => {
  return (
    <div className="py-4 text-center text-sm text-neutral-500">
      <span>
        ©{new Date().getFullYear()} Sistem Informasi Tetangga. All rights
        reserved.
      </span>
    </div>
  );
};

export default Copyright;

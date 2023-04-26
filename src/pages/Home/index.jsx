import React, { useMemo } from "react";
import { Screen } from "../../layouts";
import { Carrier, FrontGuard, FootStep, InnovaCrysta } from "../../components";

export const Home = ({ accessory }) => {
  const handleAccessoryChange = () => {
    console.log(">>>>>");
    switch (accessory) {
      case "carrier":
        return <Carrier />;
      case "footstep":
        return <FootStep />;
      case "frontguard":
        return <FrontGuard />;
      default:
        return <InnovaCrysta />;
    }
  };
  const renderAccessory = useMemo(() => {
    return handleAccessoryChange();
  }, [accessory]);
  return <Screen>{renderAccessory}</Screen>;
};

import { Card, CardContent } from "@/common/components/ui/card";
import RULE_ITEMS from "@/common/constants/rule";
import React from "react";

const RuleList = () => {
  const filteredRules = RULE_ITEMS.filter((item) => item.isShow);
  return (
    <Card className="w-3/4">
      <CardContent className="p-8">
        <ul className="list-disc space-y-4">
          {filteredRules.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RuleList;

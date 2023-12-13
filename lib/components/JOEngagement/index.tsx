// @ts-ignore
import styles from "./jo-engagement.scss?inline";

import { useMemo } from "react";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import Label from "./components/Label";

type JOEngagementProps = {
  container: any;
  subscriptionId: string;
};

export default function JOEngagement({
  container,
  ...props
}: JOEngagementProps) {
  console.log("JOEngagement props", props);

  const cache = useMemo(
    () =>
      createCache({
        key: "css",
        prepend: true,
        container,
      }),
    [container]
  );

  return (
    <CacheProvider value={cache}>
      <style type="text/css">{styles}</style>
      <div className="px-jo-engagements">
        <Label />
      </div>
    </CacheProvider>
  );
}

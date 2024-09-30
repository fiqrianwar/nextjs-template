import { useMediaQuery as mediaQuery } from "@uidotdev/usehooks";

export function useMediaQuery() {
  const isSmallDevice = mediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = mediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = mediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = mediaQuery("only screen and (min-width : 1201px)");

  return {
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  };
}

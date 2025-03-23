import { IG_HOME_VOLUME_INDICATOR } from "~utils/constants"

import IntervalInjector, {
  type IntervalInjectorOptions
} from "../IntervalInjector"

export default class Home extends IntervalInjector {
  public beforeInject(): void {
    for (const svg of document.querySelectorAll(IG_HOME_VOLUME_INDICATOR)) {
      svg.parentElement?.parentElement?.parentElement?.remove()
    }
  }
}

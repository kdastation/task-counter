import { ICounter } from "../../types/models/counter";
import { typeCounterFunction } from "../../types/type-counter-function";
import { MemoDefaultCounter } from "../../components/counters/default-counter/default-counter";
import { MemoIntervalCounter } from "../../components/counters/interval-counter/interval-counter";

export class RenderServiceCounter {
  static renderCounter(counter: ICounter, emit: typeCounterFunction) {
    const key = counter.id;
    if (counter.type === "default") {
      return <MemoDefaultCounter key={key} counter={counter} emit={emit} />;
    }
    return <MemoIntervalCounter key={key} counter={counter} emit={emit} />;
  }
}

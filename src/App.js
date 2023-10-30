import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/Message";
import CarNameValidator from "./validate/CarNameValidator";
import RaceTrialValidator from "./validate/RaceTrialValidator";
import Race from "./model/Race";

class App {
  async play() {
    Console.print(GAME_MESSAGE.inputName);
    const carNames = await Console.readLineAsync("");
    CarNameValidator.validateNames(carNames);

    Console.print(GAME_MESSAGE.inputNumber);
    const raceTrial = await Console.readLineAsync("");
    RaceTrialValidator.validateTrial(raceTrial);

    const racingGame = new Race(carNames);
    racingGame.setTrial(raceTrial);
    racingGame.start();

    Console.print("");
    Console.print(GAME_MESSAGE.printResult);
    racingGame.getCars().forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });

    Console.print(
      `${GAME_MESSAGE.printWinner}${racingGame.getWinners().join(", ")}`,
    );
  }
}

export default App;

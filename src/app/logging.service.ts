export class LoggingService {

  constructor(private flag: boolean) { }

  logIt(testo) {
    console.log(testo);
  }
}

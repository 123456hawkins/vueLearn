class Js {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class React extends Js {
    constructor() {
        super();
    }
    init(name) {
        this.name = name;
    }
}
const react = new React();
react.init('hawkins');

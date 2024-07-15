class Control {
    constructor() {
        this.forward = false
        this.reverse = false
        this.left = false
        this.right = false

        this.#addListeners()
    }

    #addListeners() {
        document.onkeydown = (e) => {
            switch (e.code) {
                case "KeyL":
                    this.forward = true
                    break
                case "Comma":
                    this.left = true
                    break
                case "Period":
                    this.reverse = true
                    break
                case "Slash":
                    this.right = true
                    break
            }
        }
        document.onkeyup = (e) => {
            switch (e.code) {
                case "KeyL":
                    this.forward = false
                    break
                case "Comma":
                    this.left = false
                    break
                case "Period":
                    this.reverse = false
                    break
                case "Slash":
                    this.right = false
                    break

            }
        }
    }
}















// class Controls {
//     constructor() {
//         this.forward = false;
//         this.reverse = false;
//         this.left = false;
//         this.right = false;

//         this.#detectDirection()
//     }

    
//     #detectDirection() {
//         document.onkeydown = (e) => {
//             switch (e.key) {
//                 case "L":
//                     this.forward = true;
//                     break;
//                 case "l":
//                     this.forward = true;
//                     break;
//                 case ".":
//                     this.reverse = true;
//                     break;
//                 case ",":
//                     this.left = true;
//                     break;
//                 case "/":
//                     this.right = true;
//                     break;
//             }
//         }
//         document.onkeyup = (e) => {
//             switch (e.key) {
//                 case "L":
//                     this.forward = false;
//                     break;
//                 case "l":
//                     this.forward = false;
//                     break;
//                 case ".":
//                     this.reverse = false;
//                     break;
//                 case ",":
//                     this.left = false;
//                     break;
//                 case "/":
//                     this.right = false;
//                     break;
//             }
//         }
//     }

// }

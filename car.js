class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0
        this.acceleration = .2
        this.maxSpeed = 3
        this.friction = .05
        this.an =0
        this.controls = new Control();
    }

    update() {
        if (this.controls) {
            if (this.controls.forward) {
                this.speed-=this.acceleration
                this.speed < -4 ? this.speed = -4 : null
            }
            if (this.controls.reverse) {
                this.speed+=this.acceleration
                this.speed > 3 ? this.speed = 3 : null
    
            }
            if (this.controls.left) {
                this.an+=.03;
            }
            if (this.controls.right) {
                this.an-=.03;
            }
            this.y+=this.speed
        }

        if (this.speed > 0) {
            this.speed = this.speed - this.friction
        }
        if (this.speed < 0) {
            this.speed = this.speed+ this.friction
        }
        if (Math.abs(this.speed) < this.friction) this.speed=0
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.an)
        ctx.beginPath();
        ctx.rect(
            - this.width / 2,
            + this.height / 2,
            this.width,
            this.height
        )
        ctx.fill()

        ctx.restore()

    }

}















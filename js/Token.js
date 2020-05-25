class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columLocation = 0;
    }

    get HTMLToken() {
        return document.getElementById(this.id);
    }

    
/** 
 * Gets left offset of html element.
 * @return  {number}   Left offset of token object's htmlToken.
 */

    get offsetLeft() {
        return this.HTMLToken.offsetLeft;
    }


    drawHTMLToken() {
        const token = document.createElement('div');
        document.querySelector('#game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }

/** 
 * Moves html token one column to left.
 */

    moveLeft() {
        if (this.columLocation > 0) {
            this.HTMLToken.style.left = this.offsetLeft - 76;
            this.columLocation -= 1;
        }
    }

/** 
 * Moves html token one column to right.
 * @param   {number}    columns - number of columns in the game board
 */

    moveRight(columns) {
        if(this.columLocation < columns -1) {
            this.HTMLToken.style.left = this.offsetLeft + 76;
            this.columLocation += 1;
        }
    }

 /** 
 * Drops html token into targeted board space.
 * @param   {Object}   target - Targeted space for dropped token.
 * @param   {function} reset  - The reset function to call after the drop animation has completed.
 */

    drop(target, reset) {
        this.dropped = true;
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }
}
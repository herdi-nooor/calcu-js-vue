<script>
export default {
  name: "calcu",
  data() {
    return {
      prevNumber: "",
      calculationOperator: "",
      currentNumber: "0",
      prevcalcu: "",
      button: {
        row0: [
          { id: 1, name: "AC", class: "all-clear", value: "" },
          { id: 2, name: "+/-", class: "plusminus", value: "" },
          { id: 3, name: ":", class: "operator", value: "/" },
        ],
        row1: [
          { id: 1, name: "7", class: "number", value: "7" },
          { id: 2, name: "8", class: "number", value: "8" },
          { id: 3, name: "9", class: "number", value: "9" },
          { id: 4, name: "*", class: "operator", value: "*" },
        ],
        row2: [
          { id: 2, name: "4", class: "number", value: "4" },
          { id: 1, name: "5", class: "number", value: "5" },
          { id: 3, name: "6", class: "number", value: "6" },
          { id: 4, name: "-", class: "operator", value: "-" },
        ],
        row3: [
          { id: 1, name: "1", class: "number", value: "1" },
          { id: 2, name: "2", class: "number", value: "2" },
          { id: 3, name: "3", class: "number", value: "3" },
          { id: 4, name: "+", class: "operator", value: "+" },
        ],
        row4: [
          { id: 1, name: "0", class: "zero-btn", value: "0" },
          { id: 2, name: "00", class: "double-zero-btn", value: "00" },
          { id: 3, name: ".", class: "decimal", value: "." },
          { id: 4, name: "=", class: "equal-sign", value: "=" },
        ],
      },
    };
  },
  methods: {
    // input
    input(classs, value) {
      if (classs[0] === "number") {
        this.number(value);
      } else if (classs[0] === "operator") {
        this.inputOperator(value[0]);
      } else if (classs[0] === "all-clear") {
        this.clearAll();
      } else if (classs[0] === "zero-btn") {
        console.log(value);
        this.zero();
      } else if (classs[0] === "equal-sign") {
        this.calculate();
      } else if (classs[0] === "decimal") {
        console.log(value);
        this.inputDecimal();
      } else if (classs[0] === "double-zero-btn") {
        console.log(value);
        this.dzero();
      } else if (classs[0] === "plusminus") {
        console.log(value);
        this.plusminus();
      }
    },

    // button function

    number(number) {
      console.log(number + " ||| " + this.currentNumber);
      console.log(" nprev calculation : " + this.prevcalcu);
      //  t && t
      if (this.currentNumber === "0" && !(this.prevcalcu === "")) {
        console.log(" n|prev calculation : " + this.prevcalcu);
        this.currentNumber = number;
        return this.currentNumber;
      } else if (this.currentNumber === "0") {
        console.log(" n||prev calculation : " + this.prevcalcu);
        this.currentNumber = number;
        return this.currentNumber;
      } else {
        this.currentNumber += number;
        return this.currentNumber;
      }
    },

    inputOperator(operator) {
      console.log(operator);
      if (this.calculationOperator === "") {
        this.prevNumber = this.currentNumber;
      } else {
        this.calculate();
        this.prevNumber = this.currentNumber;
      }
      this.calculationOperator = operator;
      this.currentNumber = "0";
    },

    clearAll() {
      this.prevNumber = "";
      this.calculationOperator = "";
      this.currentNumber = "0";
      this.prevcalcu = " ";
      console.log(" cprev calculation : " + this.prevcalcu);
    },

    inputDecimal() {
      if (this.currentNumber.includes(".")) {
        return;
      }
      this.currentNumber += ".";
    },

    zero() {
      console.log(" 0prev calculation : " + this.prevcalcu);
      if (this.currentNumber === "0") {
        this.currentNumber = "0";
      }
    },

    dzero() {
      console.log(" 00prev calculation : " + this.prevcalcu);
      if (this.currentNumber === "0" && this.calculationOperator === "") {
        this.clearAll();
        this.currentNumber = "0";
      } else {
        this.number("00");
      }
    },

    plusminus() {
      let cur = "";
      let cek = String(this.currentNumber);
      const firstDigitStr = String(this.currentNumber)[0];

      if (firstDigitStr === "-") {
        cur = cek.substring(1);
        this.currentNumber = cur;
      } else if (firstDigitStr === "0") {
      } else {
        cur = "-" + this.currentNumber;
        this.currentNumber = cur;
      }
    },

    // another function

    calculate() {
      let result = "";
      switch (this.calculationOperator) {
        case "+":
          result = parseFloat(this.prevNumber) + parseFloat(this.currentNumber);
          break;
        case "-":
          result = parseFloat(this.prevNumber) - parseFloat(this.currentNumber);
          break;
        case "*":
          result = parseFloat(this.prevNumber) * parseFloat(this.currentNumber);
          break;
        case "/":
          result = parseFloat(this.prevNumber) / parseFloat(this.currentNumber);
          break;
        default:
          break;
      }
      this.updatePrevCalcu(
        this.prevNumber,
        this.calculationOperator,
        this.currentNumber,
        result
      );
      if (this.prevNumber === "0") {
        this.currentNumber = "0";
      }
      this.currentNumber = result;
      this.calculationOperator = "";
      console.log(" =prev calculation : " + this.prevcalcu);
    },

    updatePrevCalcu(prev, Operator, curren, result) {
      this.prevcalcu = prev + " " + Operator + " " + curren + " = " + result;
    },
  },
};
</script>
<template>
  <div class="calculator">
    <input type="text" class="prevcalcu" v-model="prevcalcu" disabled />
    <input
      type="text"
      class="calculatorScreen"
      v-model="currentNumber"
      disabled
    />
    <div class="calculator-keys">
      <div class="row" v-for="rows in button" :key="rows">
        <button
          v-for="row in rows"
          :key="row.id"
          :class="[row.class]"
          @click="input([row.class], [row.value])"
        >
          {{ row.name }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.calculator {
  text-align: center;
  margin: 0 auto;
  padding: 30px;
  padding-top: 50px;
  width: 400px;
  background-color: rgb(203, 255, 255);
  border: 20px outset green;
  border-radius: 50px;
  box-shadow: 20px 20px 10px grey;
}

.calculatorScreen {
  width: 100%;
  height: 80px;
  background-color: #252525;
  color: #ffffff;
  text-align: right;
  font-size: 30pt;
  border: none;
  border-radius: 0 0 10px 10px;
  padding: 0 20px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.prevcalcu {
  width: 100%;
  height: 50px;
  background-color: #252525;
  color: #ffffff;
  text-align: right;
  font-size: 20pt;
  border: none;
  border-radius: 10px 10px 0 0;
  padding: 0 20px;
  margin-bottom: 0;
  box-sizing: border-box;
  box-shadow: 0 0;
}

.calculator-keys {
  width: 100%;
}

.row {
  display: flex;
}

button {
  height: 80px;
  background-color: rgb(99, 97, 97);
  border: 0 solid black;
  color: #ffffff;
  width: 25%;
  outline: none;
  margin: 5px;
  border-radius: 10px;
  background-color: #5dca88;
  box-shadow: 0 6px hsl(144, 65%, 29%);
}

.all-clear {
  width: 53%;
}

.operator,
.equal-sign {
  background-color: rgb(0, 224, 194);
}

button:hover {
  background-color: hsl(144, 64%, 43%);
}
.operator:hover,
.equal-sign:hover {
  background-color: rgb(0, 145, 125);
}

button:active {
  position: relative;
  top: 7px;
  box-shadow: none;
}
</style>

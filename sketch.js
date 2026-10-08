// 儲存完整的 p5.js 題庫
const questionBank = [
  // 第 1 題
  {
    // 設定題目
    question: "下列哪一個指令可以建立 p5.js 畫布？",
    // 設定選項
    options: ["createCanvas()", "makeCanvas()", "drawCanvas()", "newCanvas()"],
    // 設定答案索引
    answer: 0
  },

  // 第 2 題
  {
    // 設定題目
    question: "下列哪一個指令可以設定畫布的背景顏色？",
    // 設定選項
    options: ["background()", "backColor()", "canvasColor()", "screenColor()"],
    // 設定答案索引
    answer: 0
  },

  // 第 3 題
  {
    // 設定題目
    question: "下列哪一個指令可以繪製橢圓形？",
    // 設定選項
    options: ["circle()", "ellipse()", "oval()", "round()"],
    // 設定答案索引
    answer: 1
  },

  // 第 4 題
  {
    // 設定題目
    question: "下列哪一個指令可以設定圖形的填色色彩？",
    // 設定選項
    options: ["color()", "paint()", "fill()", "insideColor()"],
    // 設定答案索引
    answer: 2
  },

  // 第 5 題
  {
    // 設定題目
    question: "下列哪一個指令可以繪製矩形？",
    // 設定選項
    options: ["rectangle()", "box()", "square()", "rect()"],
    // 設定答案索引
    answer: 3
  },

  // 第 6 題
  {
    // 設定題目
    question: "下列哪一個函式只會在程式開始時執行一次？",
    // 設定選項
    options: ["setup()", "start()", "begin()", "initLoop()"],
    // 設定答案索引
    answer: 0
  },

  // 第 7 題
  {
    // 設定題目
    question: "下列哪一個函式會在 p5.js 中持續重複執行？",
    // 設定選項
    options: ["repeat()", "loop()", "draw()", "updateOnce()"],
    // 設定答案索引
    answer: 2
  },

  // 第 8 題
  {
    // 設定題目
    question: "下列哪一個指令可以設定線條顏色？",
    // 設定選項
    options: ["lineColor()", "stroke()", "borderColor()", "outline()"],
    // 設定答案索引
    answer: 1
  },

  // 第 9 題
  {
    // 設定題目
    question: "下列哪一個指令可以設定線條粗細？",
    // 設定選項
    options: ["lineWidth()", "strokeWeight()", "thickness()", "weightLine()"],
    // 設定答案索引
    answer: 1
  },

  // 第 10 題
  {
    // 設定題目
    question: "下列哪一個指令可以繪製直線？",
    // 設定選項
    options: ["line()", "drawLine()", "segment()", "straight()"],
    // 設定答案索引
    answer: 0
  },

  // 第 11 題
  {
    // 設定題目
    question: "下列哪一個指令可以繪製三角形？",
    // 設定選項
    options: ["triangle()", "tri()", "polygon3()", "shapeTriangle()"],
    // 設定答案索引
    answer: 0
  },

  // 第 12 題
  {
    // 設定題目
    question: "下列哪一個指令可以設定文字內容？",
    // 設定選項
    options: ["write()", "text()", "word()", "printText()"],
    // 設定答案索引
    answer: 1
  },

  // 第 13 題
  {
    // 設定題目
    question: "下列哪一個指令可以設定文字大小？",
    // 設定選項
    options: ["fontSize()", "textSize()", "sizeText()", "文字大小()"],
    // 設定答案索引
    answer: 1
  },

  // 第 14 題
  {
    // 設定題目
    question: "下列哪一個變數可以取得滑鼠目前的水平座標？",
    // 設定選項
    options: ["mouseX", "mouseHorizontal", "cursorX", "pointerX"],
    // 設定答案索引
    answer: 0
  },

  // 第 15 題
  {
    // 設定題目
    question: "下列哪一個變數可以取得滑鼠目前的垂直座標？",
    // 設定選項
    options: ["mouseY", "mouseVertical", "cursorY", "pointerY"],
    // 設定答案索引
    answer: 0
  },

  // 第 16 題
  {
    // 設定題目
    question: "下列哪一個函式會在滑鼠按下時執行？",
    // 設定選項
    options: ["mousePressed()", "mouseClick()", "clickMouse()", "pressMouse()"],
    // 設定答案索引
    answer: 0
  },

  // 第 17 題
  {
    // 設定題目
    question: "下列哪一個指令可以讓圖形不顯示外框？",
    // 設定選項
    options: ["noBorder()", "noStroke()", "hideLine()", "removeOutline()"],
    // 設定答案索引
    answer: 1
  },

  // 第 18 題
  {
    // 設定題目
    question: "下列哪一個指令可以讓圖形不填滿顏色？",
    // 設定選項
    options: ["noFill()", "emptyFill()", "clearFill()", "noColor()"],
    // 設定答案索引
    answer: 0
  },

  // 第 19 題
  {
    // 設定題目
    question: "下列哪一個指令可以產生指定範圍內的隨機數字？",
    // 設定選項
    options: ["random()", "randomNumber()", "numberRandom()", "randValue()"],
    // 設定答案索引
    answer: 0
  },

  // 第 20 題
  {
    // 設定題目
    question: "下列哪一個指令可以將數值限制在指定範圍內？",
    // 設定選項
    options: ["limit()", "constrain()", "range()", "restrictValue()"],
    // 設定答案索引
    answer: 1
  }
];

// 設定每次測驗題數
const quizQuestionCount = 5;

// 儲存本次測驗題目
let questions = [];

// 設定目前題目
let currentQuestion = 0;

// 設定答對題數
let score = 0;

// 記錄是否已作答
let answered = false;

// 記錄使用者選項
let selectedOption = -1;

// 記錄測驗是否完成
let quizFinished = false;

// 儲存選項按鈕
let optionButtons = [];

// 儲存下一題按鈕
let nextButton;

// 儲存重新挑戰按鈕
let restartButton;

// 儲存畫布元素
let canvasElement;

// 儲存最後觸控時間
let lastTouchTime = 0;

// 設定題目卡片高度
let questionCardHeight = 180;

// 設定題目文字行高
let questionLineHeight = 32;

// p5.js 初始化函式
function setup() {
  // 建立畫布
  canvasElement = createCanvas(
    max(320, windowWidth - 20),
    max(620, windowHeight - 20)
  );

  // 設定畫布顯示為區塊
  canvasElement.style("display", "block");

  // 設定畫布自動置中
  canvasElement.style("margin", "0 auto");

  // 設定文字對齊方式
  textAlign(CENTER, CENTER);

  // 設定文字字型
  textFont("Arial");

  // 防止手機瀏覽器觸控時捲動
  canvasElement.elt.style.touchAction = "none";

  // 開始新的測驗
  startNewQuiz();
}

// 開始新的測驗
function startNewQuiz() {
  // 複製題庫
  let shuffledQuestions = [...questionBank];

  // 隨機排列題庫
  shuffledQuestions = shuffle(shuffledQuestions);

  // 選取五題
  questions = shuffledQuestions.slice(0, quizQuestionCount);

  // 回到第一題
  currentQuestion = 0;

  // 將分數歸零
  score = 0;

  // 設定尚未作答
  answered = false;

  // 清除選擇
  selectedOption = -1;

  // 設定測驗未完成
  quizFinished = false;

  // 建立版面
  createResponsiveLayout();
}

// 判斷是否為手機直向
function isMobilePortrait() {
  // 回傳目前是否為手機直向
  return width < height && width < 600;
}

// 判斷是否使用單欄
function useSingleColumn() {
  // 手機直向使用單欄
  if (isMobilePortrait()) {
    return true;
  }

  // 窄畫面使用單欄
  if (width < 560) {
    return true;
  }

  // 寬畫面使用雙欄
  return false;
}

// 建立響應式版面
function createResponsiveLayout() {
  // 取得單欄狀態
  let singleColumn = useSingleColumn();

  // 設定邊界
  let margin = width < 480 ? 16 : 24;

  // 計算內容寬度
  let contentWidth = width - margin * 2;

  // 設定按鈕間距
  let gap = width < 480 ? 14 : 20;

  // 設定選項按鈕高度
  let buttonHeight = width < 480 ? 72 : 80;

  // 計算選項按鈕寬度
  let buttonWidth = singleColumn
    ? contentWidth
    : (contentWidth - gap) / 2;

  // 設定題目文字大小
  textSize(width < 480 ? 20 : 24);

  // 設定題目行高
  questionLineHeight = width < 480 ? 28 : 34;

  // 計算題目最大寬度
  let questionWidth = contentWidth - 28;

  // 取得題目換行結果
  let questionLines = wrapTextLines(
    questions[currentQuestion].question,
    questionWidth
  );

  // 計算題目卡片高度
  questionCardHeight = max(
    width < 480 ? 150 : 170,
    questionLines.length * questionLineHeight + 60
  );

  // 設定選項起始位置
  let firstOptionY = 110 + questionCardHeight + 76;

  // 清除原本選項
  optionButtons = [];

  // 建立四個選項
  for (let i = 0; i < 4; i++) {
    // 計算目前欄位
    let column = i % 2;

    // 計算目前列數
    let row = floor(i / 2);

    // 計算單欄垂直位置
    let singleY = firstOptionY + i * (buttonHeight + gap);

    // 計算雙欄垂直位置
    let doubleY = firstOptionY + row * (buttonHeight + gap);

    // 計算選項水平位置
    let buttonX = singleColumn
      ? margin
      : column === 0
      ? margin
      : margin + buttonWidth + gap;

    // 計算選項垂直位置
    let buttonY = singleColumn ? singleY : doubleY;

    // 儲存按鈕資料
    optionButtons.push({
      // 設定水平位置
      x: buttonX,

      // 設定垂直位置
      y: buttonY,

      // 設定按鈕寬度
      width: buttonWidth,

      // 設定按鈕高度
      height: buttonHeight,

      // 設定水平動畫偏移
      offsetX: 0,

      // 設定垂直動畫偏移
      offsetY: 0
    });
  }

  // 取得最後一個選項
  let lastButton = optionButtons[optionButtons.length - 1];

  // 計算選項區域底部
  let optionsBottom = lastButton.y + lastButton.height;

  // 設定行動按鈕寬度
  let actionWidth = min(240, contentWidth);

  // 設定行動按鈕高度
  let actionHeight = 54;

  // 建立下一題按鈕
  nextButton = {
    // 設定水平位置
    x: width / 2 - actionWidth / 2,

    // 設定垂直位置
    y: optionsBottom + 40,

    // 設定寬度
    width: actionWidth,

    // 設定高度
    height: actionHeight
  };

  // 建立重新挑戰按鈕
  restartButton = {
    // 設定水平位置
    x: width / 2 - actionWidth / 2,

    // 設定垂直位置
    y: height * 0.66,

    // 設定寬度
    width: actionWidth,

    // 設定高度
    height: actionHeight
  };
}

// 將文字自動換行
function wrapTextLines(message, maxWidth) {
  // 建立文字行陣列
  let lines = [];

  // 建立目前文字行
  let currentLine = "";

  // 將文字拆成字元
  let characters = message.split("");

  // 逐字處理
  for (let character of characters) {
    // 建立測試文字
    let testLine = currentLine + character;

    // 判斷是否超過最大寬度
    if (textWidth(testLine) > maxWidth && currentLine.length > 0) {
      // 儲存目前文字行
      lines.push(currentLine);

      // 開始下一行
      currentLine = character;
    } else {
      // 加入目前文字行
      currentLine = testLine;
    }
  }

  // 儲存最後一行
  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  // 回傳文字行
  return lines;
}

// 繪製自動換行文字
function drawWrappedText(message, centerX, centerY, maxWidth, lineHeight) {
  // 取得文字行
  let lines = wrapTextLines(message, maxWidth);

  // 計算文字總高度
  let totalHeight = lines.length * lineHeight;

  // 計算第一行位置
  let firstY = centerY - totalHeight / 2 + lineHeight / 2;

  // 逐行繪製文字
  for (let i = 0; i < lines.length; i++) {
    // 繪製文字
    text(lines[i], centerX, firstY + i * lineHeight);
  }
}

// p5.js 繪圖函式
function draw() {
  // 設定背景顏色
  background("#f4f1ea");

  // 判斷是否完成測驗
  if (quizFinished) {
    // 繪製結果頁
    drawResultScreen();

    // 結束函式
    return;
  }

  // 更新選項動畫
  updateOptionAnimation();

  // 繪製標題
  drawHeader();

  // 繪製題目
  drawQuestion();

  // 繪製選項
  drawOptions();

  // 繪製下一題按鈕
  drawNextButton();
}

// 繪製標題
function drawHeader() {
  // 移除外框
  noStroke();

  // 設定標題顏色
  fill("#263238");

  // 設定標題大小
  textSize(width < 480 ? 24 : 30);

  // 繪製標題
  text("p5.js 程式設計簡易指令測驗", width / 2, 42);

  // 設定題數文字大小
  textSize(width < 480 ? 16 : 18);

  // 設定題數文字顏色
  fill("#607d8b");

  // 繪製題數
  text(
    "第 " + (currentQuestion + 1) + " 題／共 " + questions.length + " 題",
    width / 2,
    76
  );
}

// 繪製題目
function drawQuestion() {
  // 設定左右邊界
  let margin = width < 480 ? 16 : 24;

  // 設定題目文字大小
  textSize(width < 480 ? 20 : 24);

  // 設定文字行高
  textLeading(questionLineHeight);

  // 設定題目卡片背景
  fill("#ffffff");

  // 設定題目卡片外框
  stroke("#d7ccc8");

  // 設定外框粗細
  strokeWeight(2);

  // 繪製題目卡片
  rect(
    margin,
    110,
    width - margin * 2,
    questionCardHeight,
    18
  );

  // 移除外框
  noStroke();

  // 設定文字顏色
  fill("#263238");

  // 繪製題目
  drawWrappedText(
    questions[currentQuestion].question,
    width / 2,
    110 + questionCardHeight / 2,
    width - margin * 2 - 28,
    questionLineHeight
  );

  // 判斷是否作答
  if (answered) {
    // 設定提示文字大小
    textSize(width < 480 ? 16 : 18);

    // 判斷答案正確性
    if (selectedOption === questions[currentQuestion].answer) {
      // 設定答對顏色
      fill("#354e0f");

      // 顯示答對訊息
      text(
        "答對了！請按下一題繼續。",
        width / 2,
        110 + questionCardHeight + 28
      );
    } else {
      // 設定答錯顏色
      fill("#8d0c0c");

      // 顯示答錯訊息
      text(
        "答錯了！綠色選項是正確答案。",
        width / 2,
        110 + questionCardHeight + 28
      );
    }
  }
}

// 繪製選項
function drawOptions() {
  // 逐一繪製四個選項
  for (let i = 0; i < optionButtons.length; i++) {
    // 取得選項按鈕
    let button = optionButtons[i];

    // 計算實際水平位置
    let actualX = button.x + button.offsetX;

    // 計算實際垂直位置
    let actualY = button.y + button.offsetY;

    // 設定預設背景色
    let buttonColor = "#ffffff";

    // 設定預設文字色
    let textColor = "#263238";

    // 判斷是否已作答
    if (answered) {
      // 判斷正確答案
      if (i === questions[currentQuestion].answer) {
        // 設定正確答案背景色
        buttonColor = "#354e0f";

        // 設定正確答案文字色
        textColor = "#ffffff";
      }

      // 判斷答錯答案
      if (
        i === selectedOption &&
        selectedOption !== questions[currentQuestion].answer
      ) {
        // 設定錯誤答案背景色
        buttonColor = "#8d0c0c";

        // 設定錯誤答案文字色
        textColor = "#ffffff";
      }
    }

    // 設定按鈕背景色
    fill(buttonColor);

    // 設定按鈕外框色
    stroke("#b0bec5");

    // 設定外框粗細
    strokeWeight(2);

    // 繪製選項按鈕
    rect(actualX, actualY, button.width, button.height, 14);

    // 移除外框
    noStroke();

    // 設定文字色
    fill(textColor);

    // 設定文字大小
    textSize(width < 480 ? 16 : 18);

    // 組合選項文字
    let optionText =
      String.fromCharCode(65 + i) +
      ". " +
      questions[currentQuestion].options[i];

    // 繪製選項文字
    drawWrappedText(
      optionText,
      actualX + button.width / 2,
      actualY + button.height / 2,
      button.width - 24,
      width < 480 ? 22 : 24
    );
  }
}

// 更新動畫
function updateOptionAnimation() {
  // 尚未作答時不播放動畫
  if (!answered) {
    return;
  }

  // 取得正確答案索引
  let correctAnswer = questions[currentQuestion].answer;

  // 逐一更新按鈕
  for (let i = 0; i < optionButtons.length; i++) {
    // 取得目前按鈕
    let button = optionButtons[i];

    // 正確答案上下移動
    if (i === correctAnswer) {
      // 設定垂直移動
      button.offsetY = sin(frameCount * 0.18) * 10;

      // 清除水平移動
      button.offsetX = 0;
    } else if (i === selectedOption) {
      // 錯誤答案左右移動
      button.offsetX = sin(frameCount * 0.24) * 14;

      // 清除垂直移動
      button.offsetY = 0;
    } else {
      // 清除水平移動
      button.offsetX = 0;

      // 清除垂直移動
      button.offsetY = 0;
    }
  }
}

// 繪製下一題按鈕
function drawNextButton() {
  // 設定按鈕顏色
  fill(answered ? "#1976d2" : "#b0bec5");

  // 設定按鈕外框
  stroke("#455a64");

  // 設定外框粗細
  strokeWeight(2);

  // 繪製按鈕
  rect(
    nextButton.x,
    nextButton.y,
    nextButton.width,
    nextButton.height,
    14
  );

  // 移除外框
  noStroke();

  // 設定文字顏色
  fill("#ffffff");

  // 設定文字大小
  textSize(width < 480 ? 18 : 20);

  // 判斷按鈕文字
  let buttonText =
    currentQuestion === questions.length - 1 ? "查看結果" : "下一題";

  // 繪製按鈕文字
  text(buttonText, width / 2, nextButton.y + nextButton.height / 2);
}

// 繪製結果頁
function drawResultScreen() {
  // 移除外框
  noStroke();

  // 設定標題顏色
  fill("#263238");

  // 設定標題大小
  textSize(width < 480 ? 28 : 36);

  // 繪製標題
  text("測驗完成！", width / 2, height * 0.24);

  // 設定分數顏色
  fill("#354e0f");

  // 設定分數大小
  textSize(width < 480 ? 22 : 28);

  // 顯示總分
  text(
    "你答對了 " + score + "／" + questions.length + " 題",
    width / 2,
    height * 0.38
  );

  // 設定鼓勵文字顏色
  fill("#546e7a");

  // 設定鼓勵文字大小
  textSize(width < 480 ? 16 : 20);

  // 宣告鼓勵訊息
  let message;

  // 判斷分數
  if (score === questions.length) {
    // 設定滿分訊息
    message = "太棒了！你完全掌握 p5.js 基礎指令！";
  } else if (score >= 3) {
    // 設定良好訊息
    message = "表現很好！繼續練習就會更熟悉。";
  } else {
    // 設定鼓勵訊息
    message = "再多練習幾次，你一定會進步！";
  }

  // 繪製鼓勵文字
  drawWrappedText(
    message,
    width / 2,
    height * 0.5,
    width - 40,
    width < 480 ? 24 : 30
  );

  // 設定按鈕背景
  fill("#1976d2");

  // 設定按鈕外框
  stroke("#455a64");

  // 設定外框粗細
  strokeWeight(2);

  // 繪製重新挑戰按鈕
  rect(
    restartButton.x,
    restartButton.y,
    restartButton.width,
    restartButton.height,
    14
  );

  // 移除外框
  noStroke();

  // 設定按鈕文字顏色
  fill("#ffffff");

  // 設定按鈕文字大小
  textSize(width < 480 ? 18 : 20);

  // 繪製按鈕文字
  text(
    "重新挑戰",
    width / 2,
    restartButton.y + restartButton.height / 2
  );
}

// 處理滑鼠事件
function mousePressed() {
  // 避免觸控後重複觸發滑鼠事件
  if (millis() - lastTouchTime < 500) {
    return false;
  }

  // 處理點擊
  handlePointer(mouseX, mouseY);

  // 停止預設行為
  return false;
}

// 處理觸控事件
function touchStarted() {
  // 記錄觸控時間
  lastTouchTime = millis();

  // 判斷是否有觸控
  if (touches.length > 0) {
    // 取得第一個觸控位置
    let point = touches[0];

    // 處理觸控
    handlePointer(point.x, point.y);
  }

  // 停止預設行為
  return false;
}

// 處理滑鼠與觸控點擊
function handlePointer(pointerX, pointerY) {
  // 判斷是否已完成測驗
  if (quizFinished) {
    // 判斷是否點擊重新挑戰
    if (isInsideButton(pointerX, pointerY, restartButton)) {
      // 開始新測驗
      startNewQuiz();
    }

    // 結束函式
    return;
  }

  // 判斷是否尚未作答
  if (!answered) {
    // 逐一檢查選項
    for (let i = 0; i < optionButtons.length; i++) {
      // 取得目前按鈕
      let button = optionButtons[i];

      // 建立點擊區域
      let hitBox = {
        // 設定水平位置
        x: button.x + button.offsetX,

        // 設定垂直位置
        y: button.y + button.offsetY,

        // 設定寬度
        width: button.width,

        // 設定高度
        height: button.height
      };

      // 判斷是否點擊按鈕
      if (isInsideButton(pointerX, pointerY, hitBox)) {
        // 記錄選項
        selectedOption = i;

        // 設定已作答
        answered = true;

        // 判斷答案
        if (selectedOption === questions[currentQuestion].answer) {
          // 增加分數
          score++;
        }

        // 結束迴圈
        break;
      }
    }
  }

  // 判斷是否點擊下一題
  if (answered && isInsideButton(pointerX, pointerY, nextButton)) {
    // 前往下一題
    goToNextQuestion();
  }
}

// 判斷座標是否在按鈕內
function isInsideButton(x, y, button) {
  // 回傳判斷結果
  return (
    x >= button.x &&
    x <= button.x + button.width &&
    y >= button.y &&
    y <= button.y + button.height
  );
}

// 前往下一題
function goToNextQuestion() {
  // 判斷是否為最後一題
  if (currentQuestion === questions.length - 1) {
    // 設定測驗完成
    quizFinished = true;

    // 結束函式
    return;
  }

  // 題目索引增加
  currentQuestion++;

  // 設定尚未作答
  answered = false;

  // 清除選項
  selectedOption = -1;

  // 重新建立版面
  createResponsiveLayout();
}

// 當視窗大小改變時執行
function windowResized() {
  // 計算新的畫布寬度
  let newWidth = max(320, windowWidth - 20);

  // 計算新的畫布高度
  let newHeight = max(620, windowHeight - 20);

  // 調整畫布大小
  resizeCanvas(newWidth, newHeight);

  // 重新建立響應式版面
  createResponsiveLayout();
}
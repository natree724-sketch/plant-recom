
import { Question, PlantRecommendation } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "주말이 되면, 당신은 주로 어떻게 시간을 보내나요?",
    options: [
      { text: "친구들과 만나 활기차게 보낸다", value: "E" },
      { text: "집에서 조용히 휴식을 취한다", value: "I" },
    ],
  },
  {
    id: 2,
    text: "새로운 장소에 갔을 때, 당신의 행동은?",
    options: [
      { text: "지도를 보며 계획된 경로로 움직인다", value: "S" },
      { text: "마음이 이끄는 대로 골목골목을 탐험한다", value: "N" },
    ],
  },
  {
    id: 3,
    text: "친구가 고민을 털어놓을 때, 당신의 반응은?",
    options: [
      { text: "객관적인 해결책을 찾아주려 노력한다", value: "T" },
      { text: "따뜻한 말로 공감하고 위로해준다", value: "F" },
    ],
  },
  {
    id: 4,
    text: "여행을 떠나기 전, 당신의 모습은?",
    options: [
      { text: "숙소, 교통, 맛집까지 꼼꼼히 계획한다", value: "J" },
      { text: "항공권만 끊고 나머지는 자유롭게 결정한다", value: "P" },
    ],
  },
  {
    id: 5,
    text: "당신은 정해진 루틴을 따르는 것을...",
    options: [
      { text: "선호하며, 안정감을 느낀다", value: "Routine" },
      { text: "답답하게 느끼며, 변화를 즐긴다", value: "Change" },
    ],
  },
  {
    id: 6,
    text: "무언가를 기다려야 할 때, 당신은 어떤 편인가요?",
    options: [
      { text: "느긋하게 기다릴 수 있다", value: "Patient" },
      { text: "조금 조급해지는 경향이 있다", value: "Impatient" },
    ],
  },
  {
    id: 7,
    text: "집 안의 작은 변화를 잘 알아채는 편인가요?",
    options: [
      { text: "그렇다. 디테일에 강하다", value: "Detail" },
      { text: "아니다. 전체적인 분위기를 본다", value: "Global" },
    ],
  },
  {
    id: 8,
    text: "당신의 공간은 햇빛이 잘 드나요?",
    options: [
      { text: "네, 햇살이 가득한 편이에요", value: "Sunny" },
      { text: "아니요, 그늘진 편이에요", value: "Shady" },
    ],
  },
  {
    id: 9,
    text: "반려식물을 돌보는 데 얼마나 시간을 쓸 수 있나요?",
    options: [
      { text: "매일 애정을 쏟으며 돌보고 싶다", value: "HighCare" },
      { text: "가끔씩만 신경 써줘도 잘 자랐으면 좋겠다", value: "LowCare" },
    ],
  },
  {
    id: 10,
    text: "식물을 키워본 경험이 있나요?",
    options: [
      { text: "네, 여러 번 키워봤어요", value: "Experienced" },
      { text: "아니요, 처음이에요", value: "Beginner" },
    ],
  },
];

export interface PlantData extends PlantRecommendation {
  id: string;
}

export const PLANT_RECOMMENDATIONS: Record<string, PlantData> = {
  "Monstera": {
    id: "Monstera",
    plantName: "몬스테라",
    reason: "당신은 활기차고 새로운 변화를 즐기는 성격이군요! 몬스테라는 시원시원하게 찢어진 잎이 매력적이며, 당신의 공간에 생동감을 불어넣어 줄 거예요. 성장이 빨라 키우는 재미를 톡톡히 느낄 수 있습니다.",
    careInstructions: {
      water: "겉흙이 말랐을 때 듬뿍 주세요. (주 1~2회)",
      light: "밝은 그늘이나 반양지를 좋아해요.",
      tip: "잎의 먼지를 닦아주면 광합성에 도움이 됩니다."
    },
    imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800"
  },
  "Sansevieria": {
    id: "Sansevieria",
    plantName: "산세베리아",
    reason: "조용하고 차분한 휴식을 선호하는 당신에게는 손이 많이 가지 않으면서도 묵묵히 자리를 지켜주는 산세베리아가 딱입니다. 공기 정화 능력이 뛰어나 쾌적한 휴식 공간을 만들어줄 거예요.",
    careInstructions: {
      water: "흙이 바짝 말랐을 때 주세요. (한 달에 1회 정도)",
      light: "어느 곳에서나 잘 자라지만, 밝은 곳을 더 좋아해요.",
      tip: "과습에 주의해야 하므로 물을 자주 주지 마세요."
    },
    imageUrl: "https://images.unsplash.com/photo-1593482892290-f54927ae1b6c?auto=format&fit=crop&q=80&w=800"
  },
  "Marimo": {
    id: "Marimo",
    plantName: "마리모",
    reason: "귀엽고 아기자기한 것을 좋아하는 당신에게 동글동글한 마리모를 추천합니다. 물속에서 자라는 반려식물로, 관리가 매우 쉬워 바쁜 일상 속에서도 부담 없이 키울 수 있습니다.",
    careInstructions: {
      water: "주 1회 깨끗한 물로 갈아주세요.",
      light: "직사광선은 피하고 시원한 곳에 두세요.",
      tip: "기분이 좋으면 물 위로 둥둥 떠오른답니다!"
    },
    imageUrl: "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?auto=format&fit=crop&q=80&w=800"
  },
  "Rosemary": {
    id: "Rosemary",
    plantName: "로즈마리",
    reason: "세심하고 계획적인 당신에게는 향긋한 향기와 함께 섬세한 관리가 필요한 로즈마리가 어울립니다. 당신의 정성 어린 손길을 통해 풍성하게 자라나며 일상의 활력을 더해줄 것입니다.",
    careInstructions: {
      water: "겉흙이 마르면 듬뿍 주세요. 통풍이 중요해요.",
      light: "햇빛이 아주 잘 드는 창가가 최적입니다.",
      tip: "가끔 잎을 쓰다듬어 향기를 맡아보세요."
    },
    imageUrl: "https://images.unsplash.com/photo-1515519106129-44644d75400a?auto=format&fit=crop&q=80&w=800"
  },
  "Stuckyi": {
    id: "Stuckyi",
    plantName: "스투키",
    reason: "실용적이고 깔끔한 것을 선호하는 당신에게는 모던한 외형의 스투키를 추천합니다. 밤에 산소를 내뿜어 숙면을 도와주며, 강인한 생명력으로 초보자도 쉽게 키울 수 있습니다.",
    careInstructions: {
      water: "한 달에 한 번 정도 흙이 마르면 주세요.",
      light: "반음지에서도 잘 견디지만 햇빛을 보면 더 건강해요.",
      tip: "통통한 줄기에 물을 저장하므로 과습은 금물입니다."
    },
    imageUrl: "https://images.unsplash.com/photo-1616848767011-09f84994bb5a?auto=format&fit=crop&q=80&w=800"
  },
  "TablePalm": {
    id: "TablePalm",
    plantName: "테이블야자",
    reason: "전체적인 분위기와 조화를 중시하는 당신에게는 어떤 인테리어에도 잘 어우러지는 테이블야자가 제격입니다. 이국적인 느낌과 함께 마음의 여유를 선사해줄 거예요.",
    careInstructions: {
      water: "겉흙이 마르면 듬뿍 주세요. 분무를 좋아해요.",
      light: "강한 햇빛보다는 은은한 밝은 그늘이 좋아요.",
      tip: "건조하면 잎 끝이 탈 수 있으니 자주 분무해주세요."
    },
    imageUrl: "https://images.unsplash.com/photo-1599598425947-5202ed562112?auto=format&fit=crop&q=80&w=800"
  },
  "Succulent": {
    id: "Succulent",
    plantName: "다육이",
    reason: "작지만 단단하고 실용적인 것을 좋아하는 당신에게는 다양한 모양의 다육이를 추천합니다. 좁은 공간에서도 잘 자라며, 당신의 공간에 작고 소중한 포인트를 만들어줄 것입니다.",
    careInstructions: {
      water: "잎이 쪼글거릴 때 듬뿍 주세요. (월 1~2회)",
      light: "햇빛을 아주 많이 좋아합니다.",
      tip: "햇빛이 부족하면 웃자랄 수 있으니 주의하세요."
    },
    imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=800"
  },
  "Ivy": {
    id: "Ivy",
    plantName: "아이비",
    reason: "자유롭고 상상력이 풍부한 당신에게는 길게 늘어지며 자유롭게 뻗어 나가는 아이비가 어울립니다. 벽을 타거나 선반 아래로 늘어뜨려 당신만의 창의적인 공간을 연출해보세요.",
    careInstructions: {
      water: "겉흙이 마르면 듬뿍 주세요.",
      light: "반양지나 반음지 어디서든 잘 적응합니다.",
      tip: "수경재배로도 아주 잘 자라는 기특한 식물입니다."
    },
    imageUrl: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&q=80&w=800"
  }
};

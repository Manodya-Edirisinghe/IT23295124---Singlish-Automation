const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 3000,
    afterClear: 2000,
    translation: 4000,
    betweenTests: 3000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

const TEST_DATA = {
  positive: [

    {
      tcId: 'Pos_Fun_001',
      name: 'Convert a short greeting question in Singlish',
      input: 'oyaa hoDHin innavaadha?',
      expected: 'ඔයා හොඳින් ඉන්නවාද?',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Convert a simple present-tense daily activity statement',
      input: 'mama dhaen vaeda karanavaa',
      expected: 'මම දැන් වැඩ කරනවා',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Going home statement',
      input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
      expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Two activities connected',
      input: 'meeka balala mata kiyanna',
      expected: 'මේක බලල මට කියන්න',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Weather condition compound',
      input: 'api heta office yamu',
      expected: 'අපි හෙට office යමු',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'eyaalaa gedhara inne',
      expected: 'එයාලා ගෙදර ඉන්නේ',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_007',
      name: 'Simple question about state',
      input: 'mata WhatsApp message ekak aavaa',
      expected: 'මට WhatsApp message එකක් ආවා',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Question about time',
      input: 'meeting eka 7.45 AM ta patan gannavaa',
      expected: 'meeting එක 7.45 AM ට පටන් ගන්නවා',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Polite question request',
      input: 'mama kaeema kanna yanavaa saha passe rest gannavaa.',
      expected: 'මම කෑම කන්න යනවා සහ පස්සෙ rest ගන්නවා.',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_010',
      name: 'Direct command',
      input: 'vaessa vahinavaa, namuth api yanna hadhanavaa',
      expected: 'වැස්ස වහිනවා, නමුත් අපි යන්න හදනවා',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite command',
      input: 'hari lassanayi, ehema nam api eeka gannamu',
      expected: 'හරි ලස්සනයි, එහෙම නම් අපි ඒක ගන්නමු',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_012',
      name: 'Morning greeting',
      input: 'api Colombo yamu saha passe lunch ganimu',
      expected: 'අපි Colombo යමු සහ පස්සෙ lunch ගනිමු',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Affirmative response',
      input: 'api iiyee film ekak baluvaa saha raee kathaa kalaa. api iiyee film ekak baeluvaa saha raee kathaa kalaa.',
      expected: 'අපි ඊයේ film එකක් බලුවා සහ රෑ කතා කලා. අපි ඊයේ film එකක් බැලුවා සහ රෑ කතා කලා.',
      length: 'S'
    },  
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense action',
      input: 'karuNaakaralaa eeka balanna saha mata kiyanna',
      expected: 'කරුණාකරලා ඒක බලන්න සහ මට කියන්න',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'oyaa enavaa saha mama balan inne',
      expected: 'ඔයා එනවා සහ මම බලන් ඉන්නේ',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_016',
      name: 'Simple negation',
      input: 'Zoom meeting eka avasan vunaa saha api logout unaa',
      expected: 'Zoom meeting එක අවසන් වුනා සහ අපි logout උනා',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'oyaa enavaanam api ekka yanna puLuvan',
      expected: 'ඔයා එනවානම් අපි එක්ක යන්න පුළුවන්',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'traffic thibba nisaa mama late vunaa',
      expected: 'traffic තිබ්බ නිසා මම late වුනා',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'oyaata puLuvannam eeka heta yavanna',
      expected: 'ඔයාට පුළුවන්නම් ඒක හෙට යවන්න',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'vaessa vaessath mama gedhara inne naehae',
      expected: 'වැස්ස වැස්සත් මම ගෙදර ඉන්නේ නැහැ',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'exam ivara unaata passe api trip ekak yanna inne',
      expected: 'exam ඉවර උනාට පස්සෙ අපි trip එකක් යන්න ඉන්නේ',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'meeting eka cancel unoth mama email ekak evannam',
      expected: 'meeting එක cancel උනොත් මම email එකක් එවන්නම්',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'adha office ekea vaeda godak thibba nisaa mama raee venakan vaeda kalaa, namuth vaeda ivara unaata passe api yaaluvoo samaga podi velaavak spend kalaa saha ehema karala gedhara aavaa.',
      expected: 'අද office එකේ වැඩ ගොඩක් තිබ්බ නිසා මම රෑ වෙනකන් වැඩ කලා, නමුත් වැඩ ඉවර උනාට පස්සෙ අපි යාලුවෝ සමග පොඩි වෙලාවක් spend කලා සහ එහෙම කරල ගෙදර ආවා.',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'mama heta office yanavaa eehindha mata adha raee kanna baee. oyaa mata raee eka savanna puluvandha',
      expected: 'මම හෙට office යනවා ඒහින්ද මට අද රෑ කන්න බෑ. ඔයා මට රෑ එක සවන්න පුලුවන්ද',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamagedharayanavaa',
      expected: 'මම ගෙදර යනවා',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'oyaaa hondhataaa inneee',
      expected: 'ඔයා හොඳට ඉන්නේ',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'MaMa GeDhArA InNe',
      expected: 'මම ගෙදර ඉන්නේ',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'mama අද office yanavaa',
      expected: 'මම අද office යනවා',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'mata eeka oonee 😊',
      expected: 'මට ඒක ඕනෑ',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'mama 123 gedhara giyaa',
      expected: 'මම 123 ගෙදර ගියා',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'mokd bn adha wenne',
      expected: 'මොකද බන් අද වෙන්නේ',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mt eek krnn b',
      expected: 'මට ඒක කරන්න බැ',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaa!!! kohomadha???',
      expected: 'ඔයා කොහොමද',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'mama heta gedhara yanna hithan inne namuth oyaa enne naththan mama yanne naee',
      expected: 'මම හෙට ගෙදර යන්න හිතන් ඉන්නේ නමුත් ඔයා එන්නේ නැත්නම් මම යන්නේ නෑ',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama nidhaaganna yanavaa',
    expectedFull: 'මම නිදාගන්න යනවා',
    length: 'S'
  }
};

class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url, { waitUntil: 'domcontentloaded' });

    // Wait until input box is visible (reliable)
    await this.page
      .getByPlaceholder('Input Your Singlish Text Here.')
      .waitFor({ timeout: 10000 });
  }

  async getInputField() {
    return this.page.getByPlaceholder('Input Your Singlish Text Here.');
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.fill('');
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

async waitForOutput() {
  const output = await this.getOutputField();

  await expect(output).toContainText(/[අ-ෆ]/, {
    timeout: 15000
  });
}

  async getOutputText() {
    const output = await this.getOutputField();
    return (await output.textContent()).trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// ================= TEST SUITE =================

test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
      });
    }
  });

  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
      });
    }
  });

  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      await translator.navigateToSite();

      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await input.fill('');

      // Partial typing
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });

      await expect(output).toHaveText(/.+/, { timeout: 5000 });

      // Complete typing
      await input.pressSequentially(
        TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length),
        { delay: 150 }
      );

      await translator.waitForOutput();

      const outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
    });
  });
});
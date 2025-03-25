type HomeDataProps = {
  title?: string
  text?: string
  aboutMe?: string
  image?: React.ReactSVGElement
  linkedinUrl: string
  facebookUrl: string
  GoogleApiKey?: string
  GooglePlaceId?: string
}


export const homeData: HomeDataProps = {
    title: "Marta Krysztofik",
    text: "Adwokat",
    aboutMe: `
        Zajmuje się sprawami karnymi, karnoskarbowymi oraz wykroczeniowymi. Świadczy pomoc prawną na każdym etapie postępowania karnego – zarówno w postępowaniu przygotowawczym, jak i sądowym. Występuje w charakterze obrońcy podejrzanego lub oskarżonego albo jako pełnomocnik pokrzywdzonego. W obszarze jej szczególnych zainteresowań pozostaje prawo karne gospodarcze oraz prawo medyczne. 
        
        Jako certyfikowany AML Officer służy również wsparciem i doświadczeniem w zakresie wdrażania polityk Compliance – polityki AML dla instytucji obowiązanych oraz polityk antykorupcyjnych dla przedsiębiorców. 
        
        Doświadczenie zawodowe zdobywała przede wszystkim jako asystent sędziego, a także podczas praktyk w szczecińskich kancelariach.
        
        Absolwentka Uniwersytetu Szczecińskiego. Odbywając aplikację radcowską przy Okręgowej Izbie Radców Prawnych w Szczecinie, zdecydowała o wcześniejszym przystąpieniu do zawodowego egzaminu adwokackiego, który zdała w 2019 r.
        
        Posługuje się biegle językiem niemieckim oraz komunikatywnie językiem angielskim.`,
    linkedinUrl: 'https://www.linkedin.com/in/martakrysztofik/',
    facebookUrl: 'https://www.facebook.com/people/Adwokat-Marta-Krysztofik/61564284749642/?mibextid=wwXIfr&rdid=r4bN3iA0TuaDLV6s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15igFFSbrS%2F%3Fmibextid%3DwwXIfr',
    GoogleApiKey: process.env.GoogleApiKeyEnv,
    GooglePlaceId: process.env.GooglePlaceIdEnv,
}
interface MajorCredits {
    readonly brand: 'Major'
    credits: number,
}

interface MinorCredits {
    readonly brand: 'Minor'
    credits: number,
}

type possParam = MajorCredits | MinorCredits

interface SummationFunction {
    (subject1: possParam, subject2: possParam): number
}

const sumMajorCredits: SummationFunction = (subject1, subject2) => {
    if (subject1.brand === 'Major' && subject2.brand === 'Major')
    {
        return subject1.credits + subject2.credits;
    }
    return 0;
}

const sumMinorCredits: SummationFunction = (subject1, subject2) => {
    if (subject1.brand === 'Minor' && subject2.brand === 'Minor')
    {
        return subject1.credits + subject2.credits;
    }
    return 0;
}

console.log(
    sumMajorCredits({ credits: 10, brand: 'Minor' }, { credits: 12, brand: 'Major' }),
    sumMinorCredits({ credits: 2, brand: 'Minor' }, { credits: 3, brand: 'Major' }),
    sumMajorCredits({ credits: 10, brand: 'Major' }, { credits: 12, brand: 'Major' }),
    sumMinorCredits({ credits: 2, brand: 'Minor' }, { credits: 3, brand: 'Minor' })
)

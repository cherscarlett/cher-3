export const home = {
    heading: 'Howdy.',
    subHeading: 'My Coding Playlist',
    paragraphs:  [
        'I am a software engineer and memoirist. I founded #AppleToo, and I advocate for fair labor practices, justice, and equity in tech.',
        'I am the author of "Forbidden Fruit" and another to-be-announced book.',
        'I\'ve been programming for more than 20 years and have worked in a variety of industries in large corporations such as Apple, Activision Blizzard, Starbucks, and USA Today. I specialize in front-end programming, but am effectively a full-stack engineer and have professionally touched most every part of the software development pipeline.'
    ]
}

export const resume = {
    heading: 'Work History',
}

export const fun = {
    heading: 'Fun Stuff',
    paragraphs:  [
        'In order to make myself stand out as a candidate early in my career, and to fight for more equitable pay, I built fun themed resume applications and other things.',
        'Here are a few of my favorites, along with other things I\'ve built in my free time.'
    ]
}

export const writing = {
    heading: 'Published works',
}

export type Content = {
    heading: string,
    subHeading?: string,
    paragraphs?: string[]
}
const questions = [
    "What I learned today?",
    "Name at least three good things that happened today?"
]

const ask = ( index = 0 ) => {
    process.stdout.write('\n' + questions[index] + ' > ')
}

ask()

const answer = []

process.stdin.on('data', data => {
    answer.push(data.toString().trim())
    if (answer.length < questions.length) {
        ask(answer.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Nice!

    Today you learned this:
    ${answer[0]}

    And this good things happened to you:
    ${answer[1]}

    See you tomorrow!
    `)
})
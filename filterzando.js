const prof_backend = professores.filter((professor) => {
    return professor.stack === "backend"
})

console.log(prof_backend)

const prof_frontend = professores.filter((professor) => {
    return professor.stack === "frontend"
})
console.log(prof_frontend)
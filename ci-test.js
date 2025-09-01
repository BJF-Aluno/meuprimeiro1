// Este é um teste super simples para a nossa aula de CI/CD
// Em um projeto real, aqui teríamos testes unitários usando Jest, Mocha, etc.

const myFeature = "Aula de CI/CD";

if (myFeature.includes("CI/CD")) {
    console.log("TESTE PASSOU: A string 'CI/CD' foi encontrada.");
    process.exit(0); // Sucesso
} else {
    console.error("TESTE FALHOU: A string 'CI/CD' não foi encontrada. O pipeline CI irá falhar.");
    process.exit(1); // Falha
}


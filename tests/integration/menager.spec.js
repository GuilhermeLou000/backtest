const request = require("supertest");
const connection = require("../../src/database")
const app = require("../../src/app");

describe("MANAGERS", () => {

    afterAll(() =>{
        connection.close();
    }); 

    it("é possível criar um novo gerente", async () => {
        const response = await request(app).post("/usuarios").send({
            primeiro_nome: "joão",
            ultimo_nome: "silva",
            data_de_nascimento: "1998-07-22",
            senha: "1234",
            email: "joão4@gmail.com",
            nickname: "joão4323",
            sexo_id: "1",
            estado_id: "1"
        });

        expect(response.ok).toBeTruthy();
        
    });
});
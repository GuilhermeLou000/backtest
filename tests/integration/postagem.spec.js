const request = require("supertest");
const connection = require("../../src/database")
const app = require("../../src/app");

describe("POSTAGEM", () => {

    afterAll(() =>{
        connection.close();
    }); 

    it("é possível criar uma nova postagem", async () => {
        const response = await request(app).post("/postagens").send({
                titulo: "Teste",
                descricao: "teste teste",
                imagem_video: "https://www.google.com.br/google.png",
                hashtag: "teste",
                usuario_id: "5",
        });


        expect(response.ok).toBeTruthy();
        
    });
});
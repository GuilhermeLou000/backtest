const request = require("supertest");
const connection = require("../../src/database")
const app = require("../../src/app");

describe("COMENTARIO", () => {

    afterAll(() =>{
        connection.close();
    }); 

    it("é possível criar um novo comentario", async () => {
        const response = await request(app).post("/postagens/1/comentario").send({
            
            descricao: "teste teste",
            usuario_id: "4"
            
        });


        expect(response.ok).toBeTruthy();
        
    });
});
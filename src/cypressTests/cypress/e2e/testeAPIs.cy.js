describe('Teste API exemplo', () => {
    it('POST Test', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                "userId": 1,
                "title": "Frango",
                "body": "52365215"
            }
        }).then((response) => {

            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('userId', 1)
            expect(response.body).to.have.property("title", "Frango")
            expect(response.body).to.have.property("body", "52365215")
            expect(response.body).to.have.property("id", 101)
        });
    });
    it('GET - esperando body com uma array de 100 itens', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',

        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.length(100)

        });

    });
    it('GET - usuário por ID - esperando propriedades de userid, id, title, body', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1'

        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("userId", 1)
            expect(response.body).to.have.property("id", 1)
            expect(response.body).to.have.property("title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            expect(response.body).to.have.property("body", "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
        });
    });
    it('GET - usuário por ID - error 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/101',
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(404)
        });
    });
    it('PUT - edita title,body, userid', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                "id": 1,
                "title": "waldyr cabaço",
                "body": "bar",
                "userId": 3
            }
        }
        ).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("id", 1)
            expect(response.body).to.have.property("title", "waldyr cabaço")
            expect(response.body).to.have.property("body", "bar")
            expect(response.body).to.have.property("userId", 3)
        });
    });
    it('DELETE - delete do usuário id=2', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'

        }).then((response) => {
            expect(response.status).to.equal(200)

        });
    });
});


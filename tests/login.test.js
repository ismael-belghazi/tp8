import { Selector } from 'testcafe';

fixture`Test Login`
    .page`http://127.0.0.1:5500/public/index.html`;
    
    test('Connexion avec identifiants valides', async t => {
        await t
            .typeText('#email', 'test@example.com')
            .typeText('#password', '123456')
            .click('button')
            .expect(Selector('#message').innerText)
            .eql('Connexion réussie !');
    });
    
    test('Connexion avec identifiants invalides', async t => {
        await t
            .typeText('#email', 'invalid@example.com')
            .typeText('#password', 'wrongpassword')
            .click('button')
            .expect(Selector('#message').innerText)
            .eql('Identifiants invalides.');
    });
    
Ls – vypíše obsah directory (vypíše obsah súborov a priečinkov toho, v čom sa nachádzame)

cd – change directory. Presunie nás tam, kam chceme. Napríklad, Dokumenty/dev. Presunie nás do dokumentov a priečinku dev. 

npx create-next-app@latest – inštalácia next js

npm run dev – nodded package manager – startovanie servera

skratka crl-c – kill process. Zastavi beziaci proces

Camel style – každé slovo začína veľkým písmenom

Layout – Rozloženie stránky (Box a greet)

Postup, ako sa dostať do Githubu (terminal):
1. git init
2. git branch -m main
3. git config –global user.name „jakub501“ (synchronizácia používaťelského mena z GitHubu)
4. git config --global user.email "jakub.kockovsky@gmail.com" (synchronizácia emailu)
5. git remote add origin https://github.com/jakub501/instagramzoska.git (prepojenie s konkrétnou stránkou)
6. git remote -v
7. git add . (Všetko sa pridalo do GitHubu)
8. npm run build (spustíme celú zostavu)
9. Následne comittujeme. Píšeme správu aktualizácie súboru, ku ktorej sa v prípade potreby vieme v budúcnosti vrátiť.

Vypísala sa mi chyba. Z toho dôvodu trebalo nájsť zdroj problému. Zdroj problému bol v kóde, keďže bol použitý apostrof. Po opravení sme znova spustili konfiguráciu npm run build a potom sme zosynchronizovali všetky informácie s Gitom, a následne Vercelom.



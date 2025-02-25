### Запуск проекта:
> git clone ...
> 
> npm i && npm start


### Краткий вывод о пользовании стейтменеджером:

# Нет ключа в сторе
1) Если К1 делает запись в стор. В сторе нет данного ключа. Ререндер будет у всех компонентов которые достают любые данные из этого стора.
Компонент где будет сделан такой акшн сделает ререндер даже с одной записью const store1 = useStore1();
[Решение] - максимальная инициализация всех возможных данных.

# set 
Во многих случаях обновляет ссылку на данные и тем самым заставляет ререндерится подписаный компонент.

# merge 
Во многих случаях если данные уже есть и они одинаковые то ререндера не произойдет.
В других случаях с новыми данными произойдет ререндер.

# ({noproxy:true})
При подписке компонента на обьект с noproxy true, ререндер будет происходить каждый раз когда в этот обьект будут добавляться любые данные.
[Решение] - за обьектом нужно следить без noproxy


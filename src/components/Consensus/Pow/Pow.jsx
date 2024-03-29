import React from 'react'

const Pow = () => {
    return (
        <div>

            <div>
                <h2>Proof of Work (PoW) (Աշխատանքի ապացույց)</h2>
                <p>
                    Աշխատանքի ապացույցը (PoW) կրկնակի ծախսերը կանխելու մեխանիզմ է: Կրիպտոարժույթների մեծ մասն այն օգտագործում է որպես կոնսենսուսի ալգորիթմ, որը ծառայում է բլոկչեյնը զերծ պահելուց կեղծիքներից
                </p>
                <p>
                    Աշխատանքի ապացույցը առաջին և ամենատարածված կոնսենսուսի ալգորիթմն է: Այն ներկայացվել է Սատոշի Նակամոտոյի կողմից 2008 թվականին հրապարակված բիթքոյնի whitePapaer-ում, սակայն տեխնոլոգիան ինքնին առաջարկվել է դրանից շատ առաջ։
                </p>
            </div>
            <div>
                <h2>Ի՞նչ է կրկնակի ծախսը:</h2>
                <p>
                    Կրկնակի ծախսեր են տեղի ունենում, երբ նույն միջոցները ծախսվում են մեկից ավելի անգամ: Այս տերմինը գրեթե միշտ օգտագործվում է թվային արժույթի հետ կապված, քանի որ իրական կյանքում դժվար է պատկերացնել մի իրավիճակ, որտեղ դուք կարող եք նույն գումարը երկու անգամ ծախսել: Օրինակ, երբ սուրճ եք գնում, գումար եք հանձնում գանձապահին, որն էլ այն դնում է դրամարկղում։ Դուք չեք կարողանա գնալ դիմացի սրճարան և վճարել երկրորդ սուրճի համար նույն գումարով:
                </p>
                <p>
                    Թվային փողի ոլորտում դա հնարավոր է։ Սա կարելի է համեմատել համակարգչում ֆայլի կրկնօրինակման հետ: Մեզ անհրաժեշտ է միայն պատճենել և տեղադրել այն: Նույն ֆայլը կարող եք ուղարկել նաև տասը, քսան և ավելի մարդկանց
                </p>
                <p>
                    Քանի որ թվային փողերը պարզապես տվյալներ են, անհրաժեշտ է կանխել մարդկանց պատճենել և ուղարկել/ծախսել նույն միավորները տարբեր վայրերում: Հակառակ դեպքում, նման արժույթը կփլուզվի ամենակարճ ժամկետում:
                </p>
                <h2>Ինչու է անհրաժեշտ Proof of Work-ը:</h2>
                <p>

                    Բլոկչեյնում գործարքները վավեր չեն դառնում անմիջապես, այլ միայն ստուգումից և բլոկչեյնին ավելացնելուց հետո։
                    Blockchain-ը մեծ բաց տվյալների բազա է, որտեղ ցանկացած օգտատեր կարող է ստուգել, ​​թե արդյոք միջոցները նախկինում ծախսվել են:
                </p>
                <p>
                    Պատկերացնենք հետեւյալ սցենարը՝ դուք և ձեր երեք ընկերներ ունեք նոթատետր։ Ամեն անգամ, երբ ինչ-որ մեկը ցանկանում է փոխանցում կատարել, դուք նշում եք. Ալիսը Բոբին ուղարկեց հինգ միավոր, Բոբը երկու միավոր փոխանցեց Քերոլին և այլն:
                </p>
                <p>
                    Բայց կա մեկ յուրահատկություն՝ ամեն անգամ փոխանցում կատարելիս հղում եք անում նախորդ գործարքին, որից ստացել եք միջոցները։ Այսպիսով, եթե Բոբը ուղարկում է երկու միավոր Քերոլին, ապա մուտքը հետևյալն է.
                </p>
                <p>
                    Այժմ մենք հնարավորություն ունենք հետևելու բոլոր փոխանցումներին: Եթե ​​Բոբը փորձի կատարել մեկ այլ գործարք՝ օգտագործելով նույն միավորները, որոնք նա հենց նոր ուղարկեց Քերոլին, բոլորն անմիջապես կիմանան այդ մասին, և թիմը թույլ չի տա նրան գրանցել այս գործարքը նոթատետրում:
                </p>
                <p>
                    Նման համակարգը կարող է լավ աշխատել մարդկանց փոքր խմբում, որտեղ բոլոր մասնակիցները լավ գիտեն միմյանց, քանի որ նրանց համար ավելի հեշտ կլինի պայմանավորվել, թե նրանցից ով է պատասխանատու գործարքները ընդհանուր ցուցակում ավելացնելու համար: Բայց ի՞նչ, եթե մենք ուզում ենք 10000 անդամներից բաղկացած խումբ հավաքել: Գրառման գրքույկ օգտագործելու գաղափարը այնքան էլ մեծ չէ, քանի որ ոչ ոք չի վստահի անծանոթին նման ֆինանսական մատյան կառավարելը:
                </p>
                <p>
                    Հենց այսպես է աշխատում Proof of Work-ը: Այն ապահովում է, որ օգտվողները չեն ծախսում գումար, որը նրանք չեն կարող ծախսել: Օգտագործելով խաղերի տեսության և ծածկագրության համադրությունը՝ ալգորիթմը թույլ է տալիս ցանկացած օգտատիրոջ թարմացնել բլոկչեյնը՝ համաձայն համակարգի կանոնների։
                </p>
            </div>
            <div>
                <h2>Ինչպես է դա աշխատում?</h2>
                <b>
                    Նոթատետրը բլոկչեյնի մի տեսակ է: Այնուամենայնիվ, գործարքները մեկ առ մեկ չեն ավելացվում համակարգին, այլ միավորվում են բլոկների մեջ, որից հետո բլոկը ստեղծող օգտվողները դրանք ներառում են թեկնածու բլոկում: Գործարքները վավեր կհամարվեն միայն այն ժամանակ, երբ թեկնածու բլոկը հաստատվի և ավելացվի բլոկչեյնին:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Բլոկչեյնին բլոկ ավելացնելը թանկ գործընթաց է: Proof of Work ը պահանջում է, որ Մայները (բլոկը ստեղծող օգտատերը) օգտագործի իր սեփական ռեսուրսները՝ դրա համար նրան պարգևատրելով որոշակի արտոնություններով: Այս ռեսուրսը հաշվողական հզորություն է, որն օգտագործվում է բլոկի տվյալները հաշելու (Քեշավորելու) համար, մինչև խնդրի լուծումը գտնվի:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Բլոկի հեշավորումը ներառում է այն հեշ ֆունկցիաների միջով անցնելու գործընթաց՝ հեշ ստեղծելու համար: Բլոկի հեշը գործում է որպես «մատնահետք» և ծառայում է որպես յուրաքանչյուր բլոկի համար եզակի մուտքային տվյալների նույնացուցիչ:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Գործընթացն իրականացնել հակառակ ուղղությամբ, այսինքն. Հեշի հիման վրա մուտքային տվյալներ ստանալը գրեթե անհնար է: Այնուամենայնիվ, երբ դուք իմանաք մուտքագրված տվյալները, կարող եք հեշտությամբ հաստատել, որ հեշը ճիշտ է, գործարկելով տվյալները հեշ ֆունկցիայի միջոցով և ստուգելով, թե արդյոք ելքը համընկնում է:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Proof of Work-ում դուք պետք է տրամադրեք տվյալներ, որոնց հեշը հետևում է արձանագրության մեջ սահմանված որոշակի կանոններին, պայմանով, որ չգիտեք, թե ինչպես դրանք ուղղակիորեն առբերել: Միակ տարբերակն այն է, որ տվյալները գործարկվեն հեշ ֆունկցիայի միջոցով և ստուգենք՝ արդյոք դրանք համապատասխանում են պայմաններին: Եթե ​​համընկնում չկա, դուք ստիպված կլինեք փոխել տվյալները՝ այլ հեշ ստանալու համար: Ձեր տվյալների նույնիսկ մեկ նիշ փոխելը կհանգեցնի բոլորովին այլ արդյունքի, այդ իսկ պատճառով անհնար է պարզապես կանխատեսել, թե ինչ արդյունք կարող է լինել:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Այսպիսով, բլոկ ստեղծելու համար անհրաժեշտ է գուշակել հեշը։ Դա անելու համար օգտատերը օգտագործում է տեղեկատվություն բոլոր գործարքների մասին, որոնք պետք է ավելացվեն բլոկներին, և որոշ այլ տվյալներ, որոնք այնուհետև հաշվում են բոլորը միասին: Բայց քանի որ տվյալների հավաքածուն չի փոխվում, մենք պետք է ավելացնենք մի տեղեկատվություն, որը կդառնա փոփոխական: Հակառակ դեպքում, ելքը միշտ կլինի նույն հեշը: Այս փոփոխական տվյալները, որոնք մուտքագրվում են նոր հեշ ստանալու համար, կոչվում է nonce, իսկ գործընթացն ինքնին կոչվում է մայնինգ:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Այսպիսով, մայնինգը բլոկչեյնի տվյալների հավաքագրման և դրանք միանգամյա կոդի հետ միասին հաշելու գործընթացն է, մինչև գտնեք համապատասխան հեշը: Եթե ​​գտնում եք հեշ, որը բավարարում է արձանագրությամբ սահմանված պայմանները, դուք իրավունք եք ստանում նոր բլոկ հեռարձակել ցանցին: Այս պահին ցանցի մյուս մասնակիցները պետք է թարմացնեն իրենց բլոկչեյնները՝ նոր բլոկը ներառելու համար:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Խոշոր կրիպտոարժույթների կողմից սահմանված պայմանները անհավանական դժվար է կատարել: Որքան բարձր է ցանցի հեշրեյտը, այնքան ավելի դժվար է գտնել վավեր հեշ: Սա արվում է բլոկների արագ առաջացումը կանխելու համար:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Հսկայական թվով հեշեր գուշակելու կանոնավոր փորձերը թանկ են, քանի որ այն վատնում է հսկայական քանակությամբ հաշվողական ռեսուրսներ և էլեկտրական էներգիա: Այնուամենայնիվ, եթե հանքագործներին հաջողվում է գտնել վավեր հեշ, ապա արձանագրությունը պարգեւատրում է նրանց աշխատանքի համար
                </b>
            </div>
            <div>
                <h2>Եկեք վերանայենք, թե ինչ ենք լուսաբանել</h2>
                <ul>
                    <li>Մայնինգի գործընթացը շատ թանկ է պահանջվող ռեսուրսների մեծ քանակի պատճառով:</li>
                    <li>Աշխատանքն ավարտելուց և վավեր/հաստատված բլոկ արտադրելուց հետո դուք ստանում եք պարգև։</li>
                    <li>Իմանալով մուտքային տվյալները՝ օգտատերը կարող է հեշտությամբ ստուգել արտադրված հեշի ճիշտությունը. ցանկացած մասնակից կարող է ստուգել, ​​որ բլոկը վավեր է՝ առանց մեծ քանակությամբ հաշվողական ռեսուրսների օգտագործման:</li>
                </ul>
                <b>
                    Բայց ի՞նչ, եթե փորձես խաբել համակարգին: Ի՞նչն է ձեզ խանգարում խարդախ գործարքների մի խումբ բլոկի մեջ դնել և վավեր հեշ ստեղծելուն
                </b>
                <br />
                <br />
                <br />
                <b>
                    Այդ նպատակով մշակվել է հանրային բանալիների գաղտնագրությունը: ]Մի խոսքով, ալգորիթմը օգտագործում է որոշակի գաղտնագրման տեխնիկա, որը թույլ է տալիս ցանկացած օգտագործողի ստուգել ցանցի առանձին մասնակցի իրավունքը՝ միջոցները տեղափոխել այլ հասցե:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Երբ դուք գործարք եք ստեղծում, դուք ստորագրում եք այն: Ցանցի ցանկացած մասնակից կարող է այնուհետև համեմատել ստորագրությունը ձեր հանրային բանալին՝ տեսնելու, թե արդյոք այն համընկնում է: Սա թույլ է տալիս իմանալ, թե արդյոք կարող եք ծախսել ձեր միջոցները և արդյոք ձեր ծախսերը չեն գերազանցում թույլատրելի գումարը:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Անվավեր գործարք պարունակող ցանկացած բլոկ ինքնաբերաբար կմերժվի: Ցանցին խաբելու փորձը ձեզ շատ կարժենա, քանի որ դուք կվնասեք ձեր հաշվողական ռեսուրսները՝ առանց դրա համար որևէ վարձատրություն ստանալու:
                </b>
                <br />
                <br />
                <br />
                <b>
                    Proof of Work-ի գաղափարն է. օգտատերերի համար ավելի ձեռնտու է գործել ազնիվ, քան փորձել խաբել համակարգը: Արձանագրությունը խրախուսում է հանքագործներին փորձել փոխհատուցել իրենց ներդրումները, ուստի մեծամասնությունը կպահպանի երաշխավորված եկամուտ ստանալու կանոնները:
                </b>
            </div>
        </div>
    )
}

export default Pow
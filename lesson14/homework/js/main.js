// 1. Зробити свій розпорядок дня. У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// EXP: let time = 0;                       0,01 - мінута, 0,1 - хвилина, 1 - година

// ------------------------------------ Callback ------------------------------------------
//
// function getUp (time,callback) {
//     setTimeout(() =>{
//        if (time <= 0.12) {
//             callback(null, 'Прокинувся!')
//        }  else {
//             callback('Ти ще спиш!', null)
//        }
//     },1000)
// }
// function breakfast (time,callback) {
//     setTimeout(() =>{
//        if (time >= 0.25) {
//             callback(null, 'Пора снідати!')
//        }  else {
//             callback('Ти не поїв, поїш ще', null)
//        }
//     },4000)
// }
// function  shower (time,callback) {
//     setTimeout(() =>{
//         if (time >= 0.3 && time < 1) {
//             callback(null, `Приймаю душ ${time} год`)
//         } else {
//             callback('Ти забув прийняти душ так не годиться', null)
//         }
//     },3000)
// }
// function getDressed (time,callback) {
//     setTimeout(() =>{
//         if (time) {
//             callback(null, `Одягаюся!`)
//         } else {
//             callback('Не одягнувся так не годиться', null)
//         }
//     },2000)
// }
// function waitBus (time,callback) {
//     setTimeout(() =>{
//         if (time < 1) {
//             callback(null, 'Сьогодні з автобусом ще повезло')
//         } else {
//             callback('Ну де ж цей автобус?!', null)
//         }
//     },8000)
// }
// function goWork (time,callback) {
//     setTimeout(() =>{
//         if (time) {
//             callback(null, 'Пора працювати')
//         } else {
//             callback('Не працюєш? То не плач потім що нема грошей', null)
//         }
//     },2000)
// }
// function dinner (time,callback) {
//     setTimeout(() =>{
//         if (time > 0.1 && time <= 0.45) {
//             callback(null, `Пообідав, пора дальше працювати`)
//         } else {
//             callback('Ні ну це не обід, так не піде', null)
//         }
//     },4000)
// }
// function comeHome (time,callback) {
//     setTimeout(() =>{
//         if (time < 1.5) {
//            callback(null, `${time} год добирався додому`)
//         } else {
//             callback('Знову пробки і пізно повернувся додому((', null)
//         }
//     },9000)
// }
// function supper (time,callback) {
//     setTimeout(() =>{
//         if (time) {
//             callback(null, 'Пора вечеряти!')
//         } else {
//             callback('Походу я щось забув', null)
//         }
//     },4000)
// }
// function watchFilm (time,callback) {
//     setTimeout(() =>{
//         if (time >= 0.25 && time <= 1.5) {
//             callback(null, 'Хороший фільм)')
//         } else {
//             callback('Тану такі фільми більше дивитися(', null)
//         }
//     },8000)
// }
//
//
// getUp(0.1,(err,data) => {
//     if (err) {console.error(err)}
//     else {
//         console.log(data);
//         breakfast(0.3,(err2,data2) => {
//             if (err2) {console.error(err2)}
//             else {
//                 console.log(data2);
//                 shower(0.4,(err3,data3) => {
//                     if (err3) {console.error(err3)}
//                     else {
//                         console.log(data3);
//                         getDressed(true,(err4,data4) => {
//                             if (err4) {console.error(err4)}
//                             else {
//                                 console.log(data4);
//                                 waitBus(0.8,(err5,data5) => {
//                                     if (err5) {console.error(err5)}
//                                     else {
//                                         console.log(data5);
//                                         goWork(true,(err6,data6) => {
//                                             if (err6) {console.error(err6)}
//                                             else {
//                                                 console.log(data6);
//                                                 dinner(0.2,(err7,data7) => {
//                                                     if (err7) {console.error(err7)}
//                                                     else {
//                                                         console.log(data7);
//                                                         comeHome(1,(err8,data8) => {
//                                                             if (err8) {console.error(err8)}
//                                                             else {
//                                                                 console.log(data8);
//                                                                 supper(true,(err9,data9) => {
//                                                                     if (err9) {console.error(err9)}
//                                                                     else {
//                                                                         console.log(data9);
//                                                                         watchFilm(1.3,(err10,data10) => {
//                                                                             if (err10) {console.error(err10)}
//                                                                             else {
//                                                                                 console.log(data10);
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// ------------------------------------ Promise ------------------------------------------
//
// function getUp (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time <= 0.12) {
//                 resolve('Прокинувся!');
//             }  else {
//                 reject('Ти ще спиш!');
//             }
//         },1000)
//     })
// }
//
// function breakfast (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time >= 0.25) {
//                 resolve('Пора снідати!');
//             }  else {
//                 reject('Ти не поїв, поїш ще');
//             }
//         },4000)
//     })
// }
//
// function  shower (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time >= 0.3 && time < 1) {
//                 resolve(`Приймаю душ ${time} год`);
//             } else {
//                 reject('Ти забув прийняти душ так не годиться');
//             }
//         },3000)
//     })
// }
//
// function getDressed (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time) {
//                 resolve('Одягаюся!');
//             } else {
//                 reject('Не одягнувся так не годиться');
//             }
//         },2000)
//     })
// }
//
// function waitBus (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time < 1) {
//                 resolve('Сьогодні з автобусом ще повезло');
//             } else {
//                 reject('Ну де ж цей автобус?!');
//             }
//         },8000)
//     })
// }
//
// function goWork (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time) {
//                 resolve('Пора працювати');
//             } else {
//                 reject('Не працюєш? То не плач потім що нема грошей');
//             }
//         },2000)
//     })
// }
//
// function dinner (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time > 0.1 && time <= 0.45) {
//                 resolve('Пообідав, пора дальше працювати');
//             } else {
//                 reject('Ні ну це не обід, так не піде');
//             }
//         },4000)
//     })
// }
//
// function comeHome (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time < 1.5) {
//                 resolve(`${time} год добирався додому`);
//             } else {
//                 reject('Знову пробки і пізно повернувся додому((');
//             }
//         },9000)
//     })
// }
//
// function supper (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time) {
//                 resolve('Пора вечеряти!');
//             } else {
//                 reject('Походу я щось забув');
//             }
//         },4000)
//     })
// }
//
// function watchFilm (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (time >= 0.25 && time <= 1.5) {
//                 resolve('Хороший фільм)');
//             } else {
//                 reject('Тану такі фільми більше дивитися(');
//             }
//         },8000)
//     })
// }
//
// getUp(0.1)
//     .then(result => {
//         console.log(result);
//         return breakfast(0.4)
//     })
//     .then(result2 => {
//         console.log(result2);
//         return shower(0.6)
//     })
//     .then(result3 => {
//         console.log(result3);
//         return getDressed(true)
//     })
//     .then(result4 => {
//         console.log(result4);
//         return waitBus(0.7)
//     })
//     .then(result5 => {
//         console.log(result5);
//         return goWork(true)
//     })
//     .then(result6 => {
//         console.log(result6);
//         return dinner(0.3)
//     })
//     .then(result7 => {
//         console.log(result7);
//         return comeHome(1.1)
//     })
//     .then(result8 => {
//         console.log(result8);
//         return supper(true)
//     })
//     .then(result9 => {
//         console.log(result9);
//         return watchFilm(1.4)
//     })
//     .then(result10 => {
//         console.log(result10);
//     })

// ------------------------------------ Async await ------------------------------------------
//
function getUp (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time <= 0.12) {
                resolve('Прокинувся!');
            }  else {
                reject('Ти ще спиш!');
            }
        },1000)
    })
}

function breakfast (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time >= 0.25) {
                resolve('Пора снідати!');
            }  else {
                reject('Ти не поїв, поїш ще');
            }
        },4000)
    })
}

function  shower (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time >= 0.3 && time < 1) {
                resolve(`Приймаю душ ${time} год`);
            } else {
                reject('Ти забув прийняти душ так не годиться');
            }
        },3000)
    })
}

function getDressed (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time) {
                resolve('Одягаюся!');
            } else {
                reject('Не одягнувся так не годиться');
            }
        },2000)
    })
}

function waitBus (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time < 1) {
                resolve('Сьогодні з автобусом ще повезло');
            } else {
                reject('Ну де ж цей автобус?!');
            }
        },8000)
    })
}

function goWork (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time) {
                resolve('Пора працювати');
            } else {
                reject('Не працюєш? То не плач потім що нема грошей');
            }
        },2000)
    })
}

function dinner (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time > 0.1 && time <= 0.45) {
                resolve('Пообідав, пора дальше працювати');
            } else {
                reject('Ні ну це не обід, так не піде');
            }
        },4000)
    })
}

function comeHome (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time < 1.5) {
                resolve(`${time} год добирався додому`);
            } else {
                reject('Знову пробки і пізно повернувся додому((');
            }
        },9000)
    })
}

function supper (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time) {
                resolve('Пора вечеряти!');
            } else {
                reject('Походу я щось забув');
            }
        },4000)
    })
}

function watchFilm (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time >= 0.25 && time <= 1.5) {
                resolve('Хороший фільм)');
            } else {
                reject('Тану такі фільми більше дивитися(');
            }
        },8000)
    })
}


async function myDay () {
    try {
        const result1 = await getUp(0.1);
        console.log(result1);

        const result2 = await breakfast(0.35);
        console.log(result2);

        const result3 = await shower(0.5);
        console.log(result3);

        const result4 = await getDressed(true);
        console.log(result4);

        const result5 = await waitBus(0.9);
        console.log(result5);

        const result6 = await goWork(true);
        console.log(result6);

        const result7 = await dinner(0.4);
        console.log(result7);

        const result8 = await comeHome(1);
        console.log(result8);

        const result9 = await supper(true);
        console.log(result9);

        const result10 = await watchFilm(1.3);
        console.log(result10);
    } catch (e) {
        console.error(e);
    }

}

myDay();

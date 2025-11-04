// Biblioteca de Livros em TypeScript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Livro = /** @class */ (function () {
    function Livro(titulo) {
        this.titulo = titulo;
        this.disponivel = true;
    }
    return Livro;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [
            new Livro("React Fluente"),
            new Livro("Guia Prático de HTML e CSS"),
            new Livro("JavaScript: O Guia Definitivo"),
            new Livro("Aprendendo TypeScript"),
            new Livro("Introdução ao Node.js"),
            new Livro("Tiwind CSS Essencial"),
            new Livro("UX Design para Iniciantes"),
        ];
    }
    //Metodos assíncronos para manipulação de livros
    Biblioteca.prototype.adicionar = function (titulo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.livros.push(new Livro(titulo));
                        return [4 /*yield*/, this.mostrar()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Biblioteca.prototype.emprestar = function (titulo) {
        return __awaiter(this, void 0, void 0, function () {
            var livro;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        livro = this.livros.find(function (l) { return l.titulo === titulo; });
                        if (livro && livro.disponivel) {
                            livro.disponivel = false;
                            alert("Voc\u00EA emprestou este livro: ".concat(titulo));
                        }
                        else {
                            alert("Livro não encontrado ou já emprestado.");
                        }
                        return [4 /*yield*/, this.mostrar()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Biblioteca.prototype.devolver = function (titulo) {
        return __awaiter(this, void 0, void 0, function () {
            var livro;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        livro = this.livros.find(function (l) { return l.titulo === titulo; });
                        if (livro && !livro.disponivel) {
                            livro.disponivel = true;
                            alert("Voc\u00EA devolveu: ".concat(titulo));
                        }
                        else {
                            alert("Livro não encontrado ou não está emprestado.");
                        }
                        return [4 /*yield*/, this.mostrar()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Método mostrar() da classe Biblioteca
    Biblioteca.prototype.mostrar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var div;
            return __generator(this, function (_a) {
                div = document.getElementById("livros");
                if (!div) {
                    console.log("Elemento 'livros' não encontrado no DOM.");
                    return [2 /*return*/];
                }
                div.innerHTML = "<h3 class='text-xl font-Nexa Rust Sans mb-4 text-custom-aponti'>Livros disponíveis em nossa Biblioteca:</h3>";
                this.livros
                    .filter(function (l) { return l.disponivel; })
                    .forEach(function (l) {
                    var p = document.createElement("p");
                    // Classes Tailwind para o parágrafo (borda, fundo, espaçamento)
                    var pClasses = "p-3 my-2 rounded-lg border-l-4 shadow-sm flex justify-between items-center";
                    // Classes Tailwind para o status (cores específicas)
                    if (l.disponivel) {
                        pClasses += " bg-green-50 border-custom-aponti text-custom-aponti";
                    }
                    else {
                        pClasses += " bg-red-50 border-red-500 text-red-800";
                    }
                    p.className = pClasses; // Aplica todas as classes
                    p.textContent = "\u2022 ".concat(l.titulo, " (").concat(l.disponivel ? "disponível" : "emprestado", ")");
                    div.appendChild(p);
                });
                return [2 /*return*/];
            });
        });
    };
    return Biblioteca;
}());
// Manipulação do DOM
var biblioteca = new Biblioteca();
biblioteca.mostrar();
var btnAdicionar = document.getElementById("btnAdicionar");
var btnEmprestar = document.getElementById("btnEmprestar");
var btnDevolver = document.getElementById("btnDevolver");
var inputTitulo = document.getElementById("titulo");
if (btnAdicionar && inputTitulo) {
    btnAdicionar.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
        var titulo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    titulo = inputTitulo.value.trim();
                    if (!titulo) return [3 /*break*/, 2];
                    return [4 /*yield*/, biblioteca.adicionar(titulo)];
                case 1:
                    _a.sent();
                    inputTitulo.value = ""; // Limpa o input
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
}
if (btnEmprestar && inputTitulo) {
    btnEmprestar.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
        var titulo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    titulo = inputTitulo.value.trim();
                    if (!titulo) return [3 /*break*/, 2];
                    return [4 /*yield*/, biblioteca.emprestar(titulo)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
}
if (btnDevolver && inputTitulo) {
    btnDevolver.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
        var titulo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    titulo = inputTitulo.value.trim();
                    if (!titulo) return [3 /*break*/, 2];
                    return [4 /*yield*/, biblioteca.devolver(titulo)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
}

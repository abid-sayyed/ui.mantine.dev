"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8206,5608,7612,4963,574],{88206:function(a,e,n){n.r(e),n.d(e,{default:function(){return l}});var t=n(14460),i=n(77612),o=n(90123),r=n(28182),m=n(95608);let p=Object.freeze({$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"apl",scopeName:"source.apl",fileTypes:["apl","apla","aplc","aplf","apli","apln","aplo","dyalog","dyapp","mipage"],firstLineMatch:"(?x)\n# APL symbols\n[⌶-⍺]\n|\n\n# Hashbang\n^\\#!.*(?:\\s|\\/|(?<=!)\\b)\n	(?:gnu[-._]?apl|aplx?|dyalog)\n(?:$|\\s)\n|\n\n# Modeline\n(?i:\n	# Emacs\n	-\\*-(?:\\s*(?=[^:;\\s]+\\s*-\\*-)|(?:.*?[;\\s]|(?<=-\\*-))mode\\s*:\\s*)\n		apl\n	(?=[\\s;]|(?<![-*])-\\*-).*?-\\*-\n\n	|\n\n	# Vim\n	(?:(?:\\s|^)vi(?:m[<=>]?\\d+|m)?|\\sex)(?=:(?=\\s*set?\\s[^\\n:]+:)|:(?!\\s* set?\\s))(?:(?:\\s|\\s*:\\s*)\\w*(?:\\s*=(?:[^\\n\\\\\\s]|\\\\.)*)?)*[\\s:](?:filetype|ft|syntax)\\s*=\n		apl\n	(?=\\s|:|$)\n)",foldingStartMarker:"{",foldingStopMarker:"}",patterns:[{match:"\\A#!.*$",name:"comment.line.shebang.apl"},{include:"#heredocs"},{include:"#main"},{contentName:"text.embedded.apl",begin:"^\\s*((\\))OFF|(\\])NEXTFILE)\\b(.*)$",end:"(?=N)A",beginCaptures:{1:{name:"entity.name.command.eof.apl"},2:{name:"punctuation.definition.command.apl"},3:{name:"punctuation.definition.command.apl"},4:{patterns:[{include:"#comment"}]}}},{name:"meta.round.bracketed.group.apl",patterns:[{include:"#main"}],begin:"\\(",end:"\\)",beginCaptures:{0:{name:"punctuation.round.bracket.begin.apl"}},endCaptures:{0:{name:"punctuation.round.bracket.end.apl"}}},{name:"meta.square.bracketed.group.apl",patterns:[{include:"#main"}],begin:"\\[",end:"\\]",beginCaptures:{0:{name:"punctuation.square.bracket.begin.apl"}},endCaptures:{0:{name:"punctuation.square.bracket.end.apl"}}},{name:"meta.system.command.apl",begin:"^\\s*((\\))\\S+)",end:"$",beginCaptures:{1:{name:"entity.name.command.apl"},2:{name:"punctuation.definition.command.apl"}},patterns:[{include:"#command-arguments"},{include:"#command-switches"},{include:"#main"}]},{name:"meta.user.command.apl",begin:"^\\s*((\\])\\S+)",end:"$",beginCaptures:{1:{name:"entity.name.command.apl"},2:{name:"punctuation.definition.command.apl"}},patterns:[{include:"#command-arguments"},{include:"#command-switches"},{include:"#main"}]}],repository:{main:{patterns:[{include:"#class"},{include:"#definition"},{include:"#comment"},{include:"#label"},{include:"#sck"},{include:"#strings"},{include:"#number"},{include:"#lambda"},{include:"#sysvars"},{include:"#symbols"},{include:"#name"}]},comment:{patterns:[{name:"comment.line.apl",begin:"⍝",end:"$",captures:{0:{name:"punctuation.definition.comment.apl"}}}]},number:{patterns:[{name:"constant.numeric.apl",match:"\xaf?[0-9][\xaf0-9A-Za-z]*(?:\\.[\xaf0-9Ee][\xaf0-9A-Za-z]*)*|\xaf?\\.[0-9Ee][\xaf0-9A-Za-z]*"}]},strings:{patterns:[{name:"string.quoted.single.apl",begin:"'",end:"'|$",beginCaptures:{0:{name:"punctuation.definition.string.begin.apl"}},endCaptures:{0:{name:"punctuation.definition.string.end.apl"}},patterns:[{match:"[^']*[^'\\n\\r\\\\]$",name:"invalid.illegal.string.apl"}]},{name:"string.quoted.double.apl",begin:'"',end:'"|$',beginCaptures:{0:{name:"punctuation.definition.string.begin.apl"}},endCaptures:{0:{name:"punctuation.definition.string.end.apl"}},patterns:[{match:'[^"]*[^"\\n\\r\\\\]$',name:"invalid.illegal.string.apl"}]}]},name:{patterns:[{name:"variable.other.readwrite.apl",match:"(?x)\n[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*"}]},label:{patterns:[{name:"meta.label.apl",match:"(?x)\n^\\s*\n(\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*\n)\n(:)",captures:{1:{name:"entity.label.name.apl"},2:{name:"punctuation.definition.label.end.apl"}}}]},symbols:{patterns:[{match:"(?<=\\s)←(?=\\s|$)",name:"keyword.spaced.operator.assignment.apl"},{match:"(?<=\\s)→(?=\\s|$)",name:"keyword.spaced.control.goto.apl"},{match:"(?<=\\s)≡(?=\\s|$)",name:"keyword.spaced.operator.identical.apl"},{match:"(?<=\\s)≢(?=\\s|$)",name:"keyword.spaced.operator.not-identical.apl"},{match:"\\+",name:"keyword.operator.plus.apl"},{match:"[-−]",name:"keyword.operator.minus.apl"},{match:"\xd7",name:"keyword.operator.times.apl"},{match:"\xf7",name:"keyword.operator.divide.apl"},{match:"⌊",name:"keyword.operator.floor.apl"},{match:"⌈",name:"keyword.operator.ceiling.apl"},{match:"[∣|]",name:"keyword.operator.absolute.apl"},{match:"[⋆*]",name:"keyword.operator.exponent.apl"},{match:"⍟",name:"keyword.operator.logarithm.apl"},{match:"○",name:"keyword.operator.circle.apl"},{match:"!",name:"keyword.operator.factorial.apl"},{match:"∧",name:"keyword.operator.and.apl"},{match:"∨",name:"keyword.operator.or.apl"},{match:"⍲",name:"keyword.operator.nand.apl"},{match:"⍱",name:"keyword.operator.nor.apl"},{match:"<",name:"keyword.operator.less.apl"},{match:"≤",name:"keyword.operator.less-or-equal.apl"},{match:"=",name:"keyword.operator.equal.apl"},{match:"≥",name:"keyword.operator.greater-or-equal.apl"},{match:">",name:"keyword.operator.greater.apl"},{match:"≠",name:"keyword.operator.not-equal.apl"},{match:"[∼~]",name:"keyword.operator.tilde.apl"},{match:"\\?",name:"keyword.operator.random.apl"},{match:"[∊∈]",name:"keyword.operator.member-of.apl"},{match:"⍷",name:"keyword.operator.find.apl"},{match:",",name:"keyword.operator.comma.apl"},{match:"⍪",name:"keyword.operator.comma-bar.apl"},{match:"⌷",name:"keyword.operator.squad.apl"},{match:"⍳",name:"keyword.operator.iota.apl"},{match:"⍴",name:"keyword.operator.rho.apl"},{match:"↑",name:"keyword.operator.take.apl"},{match:"↓",name:"keyword.operator.drop.apl"},{match:"⊣",name:"keyword.operator.left.apl"},{match:"⊢",name:"keyword.operator.right.apl"},{match:"⊤",name:"keyword.operator.encode.apl"},{match:"⊥",name:"keyword.operator.decode.apl"},{match:"\\/",name:"keyword.operator.slash.apl"},{match:"⌿",name:"keyword.operator.slash-bar.apl"},{match:"\\x5C",name:"keyword.operator.backslash.apl"},{match:"⍀",name:"keyword.operator.backslash-bar.apl"},{match:"⌽",name:"keyword.operator.rotate-last.apl"},{match:"⊖",name:"keyword.operator.rotate-first.apl"},{match:"⍉",name:"keyword.operator.transpose.apl"},{match:"⍋",name:"keyword.operator.grade-up.apl"},{match:"⍒",name:"keyword.operator.grade-down.apl"},{match:"⌹",name:"keyword.operator.quad-divide.apl"},{match:"≡",name:"keyword.operator.identical.apl"},{match:"≢",name:"keyword.operator.not-identical.apl"},{match:"⊂",name:"keyword.operator.enclose.apl"},{match:"⊃",name:"keyword.operator.pick.apl"},{match:"∩",name:"keyword.operator.intersection.apl"},{match:"∪",name:"keyword.operator.union.apl"},{match:"⍎",name:"keyword.operator.hydrant.apl"},{match:"⍕",name:"keyword.operator.thorn.apl"},{match:"⊆",name:"keyword.operator.underbar-shoe-left.apl"},{match:"⍸",name:"keyword.operator.underbar-iota.apl"},{match:"\xa8",name:"keyword.operator.each.apl"},{match:"⍤",name:"keyword.operator.rank.apl"},{match:"⌸",name:"keyword.operator.quad-equal.apl"},{match:"⍨",name:"keyword.operator.commute.apl"},{match:"⍣",name:"keyword.operator.power.apl"},{match:"\\.",name:"keyword.operator.dot.apl"},{match:"∘",name:"keyword.operator.jot.apl"},{match:"⍠",name:"keyword.operator.quad-colon.apl"},{match:"&",name:"keyword.operator.ampersand.apl"},{match:"⌶",name:"keyword.operator.i-beam.apl"},{match:"⌺",name:"keyword.operator.quad-diamond.apl"},{match:"@",name:"keyword.operator.at.apl"},{match:"◊",name:"keyword.operator.lozenge.apl"},{match:";",name:"keyword.operator.semicolon.apl"},{match:"\xaf",name:"keyword.operator.high-minus.apl"},{match:"←",name:"keyword.operator.assignment.apl"},{match:"→",name:"keyword.control.goto.apl"},{match:"⍬",name:"constant.language.zilde.apl"},{match:"⋄",name:"keyword.operator.diamond.apl"},{match:"⍫",name:"keyword.operator.lock.apl"},{match:"⎕",name:"keyword.operator.quad.apl"},{match:"##",name:"constant.language.namespace.parent.apl"},{match:"#",name:"constant.language.namespace.root.apl"},{match:"⌻",name:"keyword.operator.quad-jot.apl"},{match:"⌼",name:"keyword.operator.quad-circle.apl"},{match:"⌾",name:"keyword.operator.circle-jot.apl"},{match:"⍁",name:"keyword.operator.quad-slash.apl"},{match:"⍂",name:"keyword.operator.quad-backslash.apl"},{match:"⍃",name:"keyword.operator.quad-less.apl"},{match:"⍄",name:"keyword.operator.greater.apl"},{match:"⍅",name:"keyword.operator.vane-left.apl"},{match:"⍆",name:"keyword.operator.vane-right.apl"},{match:"⍇",name:"keyword.operator.quad-arrow-left.apl"},{match:"⍈",name:"keyword.operator.quad-arrow-right.apl"},{match:"⍊",name:"keyword.operator.tack-down.apl"},{match:"⍌",name:"keyword.operator.quad-caret-down.apl"},{match:"⍍",name:"keyword.operator.quad-del-up.apl"},{match:"⍏",name:"keyword.operator.vane-up.apl"},{match:"⍐",name:"keyword.operator.quad-arrow-up.apl"},{match:"⍑",name:"keyword.operator.tack-up.apl"},{match:"⍓",name:"keyword.operator.quad-caret-up.apl"},{match:"⍔",name:"keyword.operator.quad-del-down.apl"},{match:"⍖",name:"keyword.operator.vane-down.apl"},{match:"⍗",name:"keyword.operator.quad-arrow-down.apl"},{match:"⍘",name:"keyword.operator.underbar-quote.apl"},{match:"⍚",name:"keyword.operator.underbar-diamond.apl"},{match:"⍛",name:"keyword.operator.underbar-jot.apl"},{match:"⍜",name:"keyword.operator.underbar-circle.apl"},{match:"⍞",name:"keyword.operator.quad-quote.apl"},{match:"⍡",name:"keyword.operator.dotted-tack-up.apl"},{match:"⍢",name:"keyword.operator.dotted-del.apl"},{match:"⍥",name:"keyword.operator.dotted-circle.apl"},{match:"⍦",name:"keyword.operator.stile-shoe-up.apl"},{match:"⍧",name:"keyword.operator.stile-shoe-left.apl"},{match:"⍩",name:"keyword.operator.dotted-greater.apl"},{match:"⍭",name:"keyword.operator.stile-tilde.apl"},{match:"⍮",name:"keyword.operator.underbar-semicolon.apl"},{match:"⍯",name:"keyword.operator.quad-not-equal.apl"},{match:"⍰",name:"keyword.operator.quad-question.apl"}]},definition:{patterns:[{name:"meta.function.apl",begin:"(?x) ^\\s*? (?# 1: keyword.operator.nabla.apl) (∇) (?: \\s* (?: (?# 2: entity.function.return-value.apl) ( [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* ) | \\s* (?# 3: entity.function.return-value.shy.apl) ( (\\{)             (?# 4: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\})             (?# 5: punctuation.definition.return-value.end.apl) | (\\()             (?# 6: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\))             (?# 7: punctuation.definition.return-value.end.apl) | (\\(\\s*\\{)      (?# 8: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\}\\s*\\))      (?# 9: punctuation.definition.return-value.end.apl) | (\\{\\s*\\()      (?# 10: punctuation.definition.return-value.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\)\\s*\\})      (?# 11: punctuation.definition.return-value.end.apl) ) \\s* ) \\s* (?# 12: keyword.operator.assignment.apl) (←) )? \\s* (?: (?# MONADIC) (?: (?# 13: entity.function.name.apl) ( [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* ) \\s* (?# 14: entity.function.axis.apl) ( (?# 15: punctuation.definition.axis.begin.apl) (\\[) \\s* (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* (?# 16: invalid.illegal.extra-characters.apl) (.*?) | (?# 17: invalid.illegal.apl) ([^\\]]*) ) \\s* (?# 18: punctuation.definition.axis.end.apl) (\\]) )? \\s*? (?# 19: entity.function.arguments.right.apl) ( (?<=\\s|\\]) [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* | (\\()   (?# 20: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\))   (?# 21: punctuation.definition.arguments.end.apl) ) \\s* (?=;|$) ) | (?# DYADIC/AMBIVALENT) (?#==================) (?: (?# 22: entity.function.arguments.left.apl) ( [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s+ ) | (?# 23: entity.function.arguments.left.optional.apl) ( (\\{)          (?# 24: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\})          (?# 25: punctuation.definition.arguments.end.apl) | (\\(\\s*\\{)   (?# 26: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\}\\s*\\))   (?# 27: punctuation.definition.arguments.end.apl) | (\\{\\s*\\()   (?# 28: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\)\\s*\\})   (?# 29: punctuation.definition.arguments.end.apl) ) )? \\s* (?: (?# 30: entity.function.name.apl) ( [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* ) \\s* (?# 31: entity.function.axis.apl) ( (?# 32: punctuation.definition.axis.begin.apl) (\\[) \\s* (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* (?# 33: invalid.illegal.extra-characters.apl) (.*?) | (?# 34: invalid.illegal.apl) ([^\\]]*) ) \\s* (?# 35: punctuation.definition.axis.end.apl) (\\]) )? | (?# 36: entity.function.operands.apl) ( (?# 37: punctuation.definition.operands.begin.apl) (\\() (?# 38: entity.function.operands.left.apl) ( \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* )? \\s* (?# 39: entity.function.name.apl) ( [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* ) \\s*? (?# 40: entity.function.axis.apl) ( (?# 41: punctuation.definition.axis.begin.apl) (\\[) \\s* (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* (?# 42: invalid.illegal.extra-characters.apl) (.*?) | (?# 43: invalid.illegal.apl) ([^\\]]*) ) \\s* (?# 44: punctuation.definition.axis.end.apl) (\\]) )? \\s* (?# 45: entity.function.operands.right.apl) ( [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )? (?# 46: punctuation.definition.operands.end.apl) (\\)) ) ) \\s* (?# 47: entity.function.arguments.right.apl) ( (?<=\\s|\\]) [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* | \\s* (\\()   (?# 48: punctuation.definition.arguments.begin.apl) (?: \\s* [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )* (\\))   (?# 49: punctuation.definition.arguments.end.apl) )? (?#==================) ) \\s* (?# 50: invalid.illegal.arguments.right.apl) ([^;]+)? (?# 51: entity.function.local-variables.apl) ( (?# 52: Include “;”) ( (?> \\s* ; (?: \\s* [⎕A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ] [A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]* \\s* )+ )+ ) | (?# 53: invalid.illegal.local-variables.apl) ([^⍝]+) )? \\s* (?# 54: comment.line.apl) (⍝.*)? $",end:"^\\s*?(?:(∇)|(⍫))\\s*?(⍝.*?)?$",patterns:[{name:"entity.function.definition.apl",match:"(?x)\n^\\s*\n(\n	(?>\n		;\n		(?:\n			\\s*\n			[⎕A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n			[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*\n			\\s*\n		)+\n	)+\n)",captures:{0:{name:"entity.function.local-variables.apl"},1:{patterns:[{name:"punctuation.separator.apl",match:";"}]}}},{include:"$self"}],beginCaptures:{0:{name:"entity.function.definition.apl"},1:{name:"keyword.operator.nabla.apl"},2:{name:"entity.function.return-value.apl"},3:{name:"entity.function.return-value.shy.apl"},4:{name:"punctuation.definition.return-value.begin.apl"},5:{name:"punctuation.definition.return-value.end.apl"},6:{name:"punctuation.definition.return-value.begin.apl"},7:{name:"punctuation.definition.return-value.end.apl"},8:{name:"punctuation.definition.return-value.begin.apl"},9:{name:"punctuation.definition.return-value.end.apl"},10:{name:"punctuation.definition.return-value.begin.apl"},11:{name:"punctuation.definition.return-value.end.apl"},12:{name:"keyword.operator.assignment.apl"},13:{name:"entity.function.name.apl",patterns:[{include:"#embolden"}]},14:{name:"entity.function.axis.apl"},15:{name:"punctuation.definition.axis.begin.apl"},16:{name:"invalid.illegal.extra-characters.apl"},17:{name:"invalid.illegal.apl"},18:{name:"punctuation.definition.axis.end.apl"},19:{name:"entity.function.arguments.right.apl"},20:{name:"punctuation.definition.arguments.begin.apl"},21:{name:"punctuation.definition.arguments.end.apl"},22:{name:"entity.function.arguments.left.apl"},23:{name:"entity.function.arguments.left.optional.apl"},24:{name:"punctuation.definition.arguments.begin.apl"},25:{name:"punctuation.definition.arguments.end.apl"},26:{name:"punctuation.definition.arguments.begin.apl"},27:{name:"punctuation.definition.arguments.end.apl"},28:{name:"punctuation.definition.arguments.begin.apl"},29:{name:"punctuation.definition.arguments.end.apl"},30:{name:"entity.function.name.apl",patterns:[{include:"#embolden"}]},31:{name:"entity.function.axis.apl"},32:{name:"punctuation.definition.axis.begin.apl"},33:{name:"invalid.illegal.extra-characters.apl"},34:{name:"invalid.illegal.apl"},35:{name:"punctuation.definition.axis.end.apl"},36:{name:"entity.function.operands.apl"},37:{name:"punctuation.definition.operands.begin.apl"},38:{name:"entity.function.operands.left.apl"},39:{name:"entity.function.name.apl",patterns:[{include:"#embolden"}]},40:{name:"entity.function.axis.apl"},41:{name:"punctuation.definition.axis.begin.apl"},42:{name:"invalid.illegal.extra-characters.apl"},43:{name:"invalid.illegal.apl"},44:{name:"punctuation.definition.axis.end.apl"},45:{name:"entity.function.operands.right.apl"},46:{name:"punctuation.definition.operands.end.apl"},47:{name:"entity.function.arguments.right.apl"},48:{name:"punctuation.definition.arguments.begin.apl"},49:{name:"punctuation.definition.arguments.end.apl"},50:{name:"invalid.illegal.arguments.right.apl"},51:{name:"entity.function.local-variables.apl"},52:{patterns:[{name:"punctuation.separator.apl",match:";"}]},53:{name:"invalid.illegal.local-variables.apl"},54:{name:"comment.line.apl"}},endCaptures:{1:{name:"keyword.operator.nabla.apl"},2:{name:"keyword.operator.lock.apl"},3:{name:"comment.line.apl"}}}]},embolden:{patterns:[{name:"markup.bold.identifier.apl",match:".+"}]},lambda:{name:"meta.lambda.function.apl",begin:"\\{",end:"\\}",beginCaptures:{0:{name:"punctuation.definition.lambda.begin.apl"}},endCaptures:{0:{name:"punctuation.definition.lambda.end.apl"}},patterns:[{include:"#main"},{include:"#lambda-variables"}]},"lambda-variables":{patterns:[{match:"⍺⍺",name:"constant.language.lambda.operands.left.apl"},{match:"⍵⍵",name:"constant.language.lambda.operands.right.apl"},{match:"[⍺⍶]",name:"constant.language.lambda.arguments.left.apl"},{match:"[⍵⍹]",name:"constant.language.lambda.arguments.right.apl"},{match:"χ",name:"constant.language.lambda.arguments.axis.apl"},{match:"∇∇",name:"constant.language.lambda.operands.self.operator.apl"},{match:"∇",name:"constant.language.lambda.operands.self.function.apl"},{match:"λ",name:"constant.language.lambda.symbol.apl"}]},sysvars:{patterns:[{match:"(?:(⎕)|(⍞))[A-Za-z]*",name:"support.system.variable.apl",captures:{1:{name:"punctuation.definition.quad.apl"},2:{name:"punctuation.definition.quad-quote.apl"}}}]},"command-arguments":{patterns:[{name:"variable.parameter.argument.apl",begin:"\\b(?=\\S)",end:"\\b(?=\\s)",patterns:[{include:"#main"}]}]},"command-switches":{patterns:[{name:"variable.parameter.switch.apl",begin:"(?x)\n(?<=\\s)(-)\n(\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*\n)\n(=)",end:"\\b(?=\\s)",beginCaptures:{1:{name:"punctuation.delimiter.switch.apl"},2:{name:"entity.name.switch.apl"},3:{name:"punctuation.assignment.switch.apl"}},patterns:[{include:"#main"}]},{name:"variable.parameter.switch.apl",match:"(?x)\n(?<=\\s)(-)\n(\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*\n)\n(?!=)",captures:{1:{name:"punctuation.delimiter.switch.apl"},2:{name:"entity.name.switch.apl"}}}]},sck:{patterns:[{name:"keyword.control.sck.apl",match:"(?<=\\s|^)(:)[A-Za-z]+",captures:{1:{name:"punctuation.definition.sck.begin.apl"}}}]},class:{patterns:[{begin:"(?x)\n(?<=\\s|^)\n((:)Class)\n\\s+\n(\n	'[^']*'?\n	|\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*\n)\n\\s*\n(\n	(:)\n	\\s*\n	(?:\n		(\n			'[^']*'?\n			|\n			[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n			[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*\n		)\n		\\s*\n	)?\n)?\n(.*?)$",end:"(?<=\\s|^)((:)EndClass)(?=\\b)",beginCaptures:{0:{name:"meta.class.apl"},1:{name:"keyword.control.class.apl"},2:{name:"punctuation.definition.class.apl"},3:{name:"entity.name.type.class.apl",patterns:[{include:"#strings"}]},4:{name:"entity.other.inherited-class.apl"},5:{name:"punctuation.separator.inheritance.apl"},6:{patterns:[{include:"#strings"}]},7:{name:"entity.other.class.interfaces.apl",patterns:[{include:"#csv"}]}},endCaptures:{1:{name:"keyword.control.class.apl"},2:{name:"punctuation.definition.class.apl"}},patterns:[{name:"meta.field.apl",begin:"(?<=\\s|^)(:)Field(?=\\s)",end:"\\s*(←.*)?(?:$|(?=⍝))",beginCaptures:{0:{name:"keyword.control.field.apl"},1:{name:"punctuation.definition.field.apl"}},endCaptures:{0:{name:"entity.other.initial-value.apl"},1:{patterns:[{include:"#main"}]}},patterns:[{name:"storage.modifier.access.public.apl",match:"(?<=\\s|^)Public(?=\\s|$)"},{name:"storage.modifier.access.private.apl",match:"(?<=\\s|^)Private(?=\\s|$)"},{name:"storage.modifier.shared.apl",match:"(?<=\\s|^)Shared(?=\\s|$)"},{name:"storage.modifier.instance.apl",match:"(?<=\\s|^)Instance(?=\\s|$)"},{name:"storage.modifier.readonly.apl",match:"(?<=\\s|^)ReadOnly(?=\\s|$)"},{name:"entity.name.type.apl",match:"(?x)\n(\n	'[^']*'?\n	|\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ]\n	[A-Z_a-z\xc0-\xd6\xd8-\xdd\xdf\xe0-\xf6\xf8-\xfc\xfe∆⍙Ⓐ-Ⓩ\xaf0-9]*\n)",captures:{1:{patterns:[{include:"#strings"}]}}}]},{include:"$self"}]}]},csv:{patterns:[{match:",",name:"punctuation.separator.apl"},{include:"$self"}]},heredocs:{patterns:[{name:"meta.heredoc.apl",begin:`^.*?\u2395INP\\s+('|")((?i).*?HTML?.*?|END-OF-\u2395INP)\\1.*$`,end:"^.*?\\2.*?$",beginCaptures:{0:{patterns:[{include:"#main"}]}},endCaptures:{0:{name:"constant.other.apl"}},contentName:"text.embedded.html.basic",patterns:[{include:"text.html.basic"},{include:"#embedded-apl"}]},{name:"meta.heredoc.apl",begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:XML|XSLT|SVG|RSS).*?)\\1.*$`,end:"^.*?\\2.*?$",beginCaptures:{0:{patterns:[{include:"#main"}]}},endCaptures:{0:{name:"constant.other.apl"}},contentName:"text.embedded.xml",patterns:[{include:"text.xml"},{include:"#embedded-apl"}]},{name:"meta.heredoc.apl",begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:CSS|stylesheet).*?)\\1.*$`,end:"^.*?\\2.*?$",beginCaptures:{0:{patterns:[{include:"#main"}]}},endCaptures:{0:{name:"constant.other.apl"}},contentName:"source.embedded.css",patterns:[{include:"source.css"},{include:"#embedded-apl"}]},{name:"meta.heredoc.apl",begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:JS(?!ON)|(?:ECMA|J|Java).?Script).*?)\\1.*$`,end:"^.*?\\2.*?$",beginCaptures:{0:{patterns:[{include:"#main"}]}},endCaptures:{0:{name:"constant.other.apl"}},contentName:"source.embedded.js",patterns:[{include:"source.js"},{include:"#embedded-apl"}]},{name:"meta.heredoc.apl",begin:`^.*?\u2395INP\\s+('|")((?i).*?(?:JSON).*?)\\1.*$`,end:"^.*?\\2.*?$",beginCaptures:{0:{patterns:[{include:"#main"}]}},endCaptures:{0:{name:"constant.other.apl"}},contentName:"source.embedded.json",patterns:[{include:"source.json"},{include:"#embedded-apl"}]},{name:"meta.heredoc.apl",begin:`^.*?\u2395INP\\s+('|")(?i)((?:Raw|Plain)?\\s*Te?xt)\\1.*$`,end:"^.*?\\2.*?$",beginCaptures:{0:{patterns:[{include:"#main"}]}},endCaptures:{0:{name:"constant.other.apl"}},contentName:"text.embedded.plain",patterns:[{include:"#embedded-apl"}]},{name:"meta.heredoc.apl",begin:`^.*?\u2395INP\\s+('|")(.*?)\\1.*$`,end:"^.*?\\2.*?$",beginCaptures:{0:{patterns:[{include:"#main"}]}},endCaptures:{0:{name:"constant.other.apl"}},patterns:[{include:"$self"}]}]},"embedded-apl":{patterns:[{name:"meta.embedded.block.apl",begin:"(?i)(<(\\?|%)(?:apl(?=\\s+)|=))",end:"(?<=\\s)(\\2>)",patterns:[{include:"#main"}],beginCaptures:{1:{name:"punctuation.section.embedded.begin.apl"}},endCaptures:{1:{name:"punctuation.section.embedded.end.apl"}}}]}},displayName:"APL",embeddedLangs:["html","xml","css","javascript","json"]});var l=[...t.default,...i.default,...o.default,...r.default,...m.default,p]},95608:function(a,e,n){n.r(e),n.d(e,{default:function(){return i}});let t=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/microsoft/vscode-JSON.tmLanguage/blob/master/JSON.tmLanguage","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/microsoft/vscode-JSON.tmLanguage/commit/9bd83f1c252b375e957203f21793316203f61f70",name:"json",scopeName:"source.json",patterns:[{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json"}},name:"meta.structure.array.json",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.array.json"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json"}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.documentation.json"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.json"},{captures:{1:{name:"punctuation.definition.comment.json"}},match:"(//).*$\\n?",name:"comment.line.double-slash.js"}]},constant:{match:"\\b(?:true|false|null)\\b",name:"constant.language.json"},number:{match:"(?x)        # turn on extended mode\n  -?        # an optional minus\n  (?:\n    0       # a zero\n    |       # ...or...\n    [1-9]   # a 1-9 character\n    \\d*     # followed by zero or more digits\n  )\n  (?:\n    (?:\n      \\.    # a period\n      \\d+   # followed by one or more digits\n    )?\n    (?:\n      [eE]  # an e character\n      [+-]? # followed by an option +/-\n      \\d+   # followed by one or more digits\n    )?      # make exponent optional\n  )?        # make decimal portion optional",name:"constant.numeric.json"},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json"}},name:"meta.structure.dictionary.json",patterns:[{comment:"the JSON object key",include:"#objectkey"},{include:"#comments"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json"}},name:"meta.structure.dictionary.value.json",patterns:[{comment:"the JSON object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json"}]},string:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.json"}},name:"string.quoted.double.json",patterns:[{include:"#stringcontent"}]},objectkey:{begin:'"',beginCaptures:{0:{name:"punctuation.support.type.property-name.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.support.type.property-name.end.json"}},name:"string.json support.type.property-name.json",patterns:[{include:"#stringcontent"}]},stringcontent:{patterns:[{match:'(?x)                # turn on extended mode\n  \\\\                # a literal backslash\n  (?:               # ...followed by...\n    ["\\\\/bfnrt]     # one of these characters\n    |               # ...or...\n    u               # a u\n    [0-9a-fA-F]{4}) # and four hex digits',name:"constant.character.escape.json"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json"}]},value:{patterns:[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"}]}},displayName:"JSON"});var i=[t]},77612:function(a,e,n){n.r(e),n.d(e,{default:function(){return o}});var t=n(21599);let i=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/atom/language-xml/blob/master/grammars/xml.cson","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/atom/language-xml/commit/7bc75dfe779ad5b35d9bf4013d9181864358cb49",name:"xml",scopeName:"text.xml",patterns:[{begin:"(<\\?)\\s*([-_a-zA-Z0-9]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"}},end:"(\\?>)",name:"meta.tag.preprocessor.xml",patterns:[{match:" ([a-zA-Z-]+)",name:"entity.other.attribute-name.xml"},{include:"#doublequotedString"},{include:"#singlequotedString"}]},{begin:"(<!)(DOCTYPE)\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.doctype.xml"},3:{name:"variable.language.documentroot.xml"}},end:"\\s*(>)",name:"meta.tag.sgml.doctype.xml",patterns:[{include:"#internalSubset"}]},{include:"#comments"},{begin:"(<)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(?=(\\s[^>]*)?></\\2>)",beginCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"},3:{name:"entity.name.tag.namespace.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(>)(</)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(>)",endCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"punctuation.definition.tag.xml"},3:{name:"entity.name.tag.xml"},4:{name:"entity.name.tag.namespace.xml"},5:{name:"punctuation.separator.namespace.xml"},6:{name:"entity.name.tag.localname.xml"},7:{name:"punctuation.definition.tag.xml"}},name:"meta.tag.no-content.xml",patterns:[{include:"#tagStuff"}]},{begin:"(</?)(?:([-\\w\\.]+)((:)))?([-\\w\\.:]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.namespace.xml"},3:{name:"entity.name.tag.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(/?>)",name:"meta.tag.xml",patterns:[{include:"#tagStuff"}]},{include:"#entity"},{include:"#bare-ampersand"},{begin:"<%@",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java-props.embedded.xml",patterns:[{match:"page|include|taglib",name:"keyword.other.page-props.xml"}]},{begin:"<%[!=]?(?!--)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"(?!--)%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java.embedded.xml",patterns:[{include:"source.java"}]},{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"]]>",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.unquoted.cdata.xml"}],repository:{EntityDecl:{begin:"(<!)(ENTITY)\\s+(%\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\s+(?:SYSTEM|PUBLIC)\\s+)?",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.entity.xml"},3:{name:"punctuation.definition.entity.xml"},4:{name:"variable.language.entity.xml"},5:{name:"keyword.other.entitytype.xml"}},end:"(>)",patterns:[{include:"#doublequotedString"},{include:"#singlequotedString"}]},"bare-ampersand":{match:"&",name:"invalid.illegal.bad-ampersand.xml"},doublequotedString:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.double.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},entity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.xml"},internalSubset:{begin:"(\\[)",captures:{1:{name:"punctuation.definition.constant.xml"}},end:"(\\])",name:"meta.internalsubset.xml",patterns:[{include:"#EntityDecl"},{include:"#parameterEntity"},{include:"#comments"}]},parameterEntity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)",name:"constant.character.parameter-entity.xml"},singlequotedString:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.single.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},tagStuff:{patterns:[{captures:{1:{name:"entity.other.attribute-name.namespace.xml"},2:{name:"entity.other.attribute-name.xml"},3:{name:"punctuation.separator.namespace.xml"},4:{name:"entity.other.attribute-name.localname.xml"}},match:"(?:^|\\s+)(?:([-\\w.]+)((:)))?([-\\w.:]+)\\s*="},{include:"#doublequotedString"},{include:"#singlequotedString"}]},comments:{patterns:[{begin:"<%--",captures:{0:{name:"punctuation.definition.comment.xml"},end:"--%>",name:"comment.block.xml"}},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.xml"}},end:"-->",name:"comment.block.xml",patterns:[{begin:"--(?!>)",captures:{0:{name:"invalid.illegal.bad-comments-or-CDATA.xml"}}}]}]}},displayName:"XML",embeddedLangs:["java"]});var o=[...t.default,i]}}]);
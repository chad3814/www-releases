Search.setIndex({"docnames": ["ELF/linker_script", "ELF/start-stop-gc", "ELF/warn_backrefs", "MachO/index", "MachO/ld64-vs-lld", "NewLLD", "Partitions", "ReleaseNotes", "WebAssembly", "error_handling_script", "index", "missingkeyfunction", "windows_support"], "filenames": ["ELF/linker_script.rst", "ELF/start-stop-gc.rst", "ELF/warn_backrefs.rst", "MachO/index.rst", "MachO/ld64-vs-lld.rst", "NewLLD.rst", "Partitions.rst", "ReleaseNotes.rst", "WebAssembly.rst", "error_handling_script.rst", "index.rst", "missingkeyfunction.rst", "windows_support.rst"], "titles": ["Linker Script implementation notes and policy", "-z start-stop-gc", "\u2013warn-backrefs", "Mach-O LLD Port", "ld64 vs LLD-MachO", "The ELF, COFF and Wasm Linkers", "Partitions", "lld 18.1.1 Release Notes", "WebAssembly lld port", "Error Handling Script", "LLD - The LLVM Linker", "Missing Key Function", "Windows support"], "terms": {"lld": [0, 1, 2, 5, 6, 9, 11], "larg": [0, 2, 3, 5, 10, 12], "subset": 0, "gnu": [0, 1, 2, 10], "ld": [0, 1, 2, 3, 6, 7, 8, 10], "notat": 0, "The": [0, 1, 2, 3, 6, 7, 8, 9, 11, 12], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], "featur": [0, 1, 6], "thei": [0, 2, 4, 5, 8], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "document": [0, 3, 5, 7, 9, 10], "manual": 0, "we": [0, 2, 4, 5, 7, 8, 10], "consid": [0, 1, 2, 5], "bug": [0, 5], "doe": [0, 1, 2, 4, 5, 6, 8, 12], "agre": [0, 8], "mention": 0, "except": [0, 12], "below": [0, 6], "complet": [0, 5, 10], "specif": [0, 5, 6, 7, 8, 9], "suffici": 0, "build": [0, 1, 4, 6, 7, 8, 11], "an": [0, 2, 4, 5, 6, 7, 8, 9, 10, 12], "In": [0, 1, 2, 4, 5, 6, 8, 9, 10, 11], "particular": [0, 4, 8], "some": [0, 2, 4, 5, 9, 10, 11, 12], "onli": [0, 2, 4, 5, 6, 8, 10, 11], "defin": [0, 2, 5, 6, 7, 8], "have": [0, 2, 4, 5, 6, 7, 10, 11], "chang": [0, 2, 6, 8, 10], "over": [0, 2, 5, 7], "time": [0, 4, 6, 7, 8, 10, 11], "properti": [0, 5], "follow": [0, 4, 6, 8, 9], "wherev": 0, "possibl": [0, 5, 8, 11], "reserv": [0, 6], "right": [0, 2, 5], "make": [0, 2, 4, 5, 6, 7, 10, 11], "differ": [0, 2, 3, 4, 5, 8, 10], "choic": [0, 5], "where": [0, 2, 4, 6, 8], "appropri": [0, 3], "intent": [0, 6], "deviat": 0, "thi": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11], "file": [0, 2, 3, 5, 6, 7, 10, 11, 12], "A": [0, 1, 2, 5, 6, 7, 9, 11], "look": [0, 5, 6], "like": [0, 1, 2, 5, 6, 7, 8, 10, 11, 12], "express": [0, 8], "first": [0, 4, 5, 8, 10, 11], "form": [0, 2], "If": [0, 1, 2, 5, 8, 10, 11, 12], "alreadi": [0, 8, 10], "overridden": 0, "other": [0, 2, 3, 4, 6, 11], "requir": [0, 5, 7, 8], "For": [0, 2, 3, 5, 7, 8, 10], "simpl": 0, "alia": [0, 4, 7], "aliase": 0, "st_type": 0, "field": [0, 6], "copi": [0, 5, 11], "from": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12], "origin": [0, 9], "ani": [0, 2, 4, 5, 6, 8, 11], "arithmet": 0, "oper": [0, 5, 7, 12], "e": [0, 1, 2, 8, 9], "g": [0, 1, 2, 3, 9, 12], "0": [0, 1, 4, 7, 9, 10, 11], "reset": 0, "stt_notyp": 0, "st_size": 0, "set": [0, 2, 3, 4, 5, 6, 7, 8, 10], "insert": [0, 5], "after": [0, 5, 8, 10], "befor": [0, 1, 4, 5, 10], "anchor_sect": 0, "each": [0, 5, 6, 8, 10], "can": [0, 2, 3, 4, 5, 7, 8, 10, 11, 12], "overlai": [0, 7], "when": [0, 2, 3, 5, 7, 8, 9, 10, 11, 12], "keyword": [0, 1], "present": 0, "describ": [0, 3, 5, 7, 10], "which": [0, 1, 2, 4, 5, 6, 7, 8, 11], "should": [0, 2, 4, 5, 6, 7, 8, 10], "specifi": [0, 2, 5, 6, 7, 8, 9, 12], "anchor": 0, "occur": 0, "input": [0, 1, 2, 5, 7, 8], "been": [0, 2, 5, 6, 7, 10, 12], "map": [0, 5], "orphan": 0, "process": [0, 5, 9, 12], "case": [0, 2, 5, 8, 9, 11], "ha": [0, 1, 2, 3, 4, 5, 8, 11], "provid": [0, 2, 3, 8, 9, 10, 12], "everi": [0, 2, 11], "appli": [0, 5], "rule": 0, "similar": [0, 1, 2, 5, 6, 8], "": [0, 3, 4, 5, 6, 7, 10, 11, 12], "intern": [0, 5, 8], "pt_load": 0, "segment": [0, 8], "accord": [0, 6, 8], "z": [0, 10], "nosepar": 0, "code": [0, 1, 4, 5, 6, 7, 8, 10], "separ": [0, 2, 6], "loadabl": [0, 6], "__bss_start": 0, "end": [0, 2, 5, 8], "_end": 0, "etext": 0, "_etext": 0, "edata": 0, "_edata": 0, "sort": [0, 7], "ctor": 0, "dtor": 0, "init_arrai": [0, 1], "fini_arrai": 0, "powerpc64": [0, 10], "toc": 0, "place": [0, 2, 5, 6, 8], "text": [0, 5, 8], "handl": [0, 4, 5, 7, 8, 10], "certain": [0, 9], "variant": 0, "hot": 0, "unknown": [0, 8], "unlik": [0, 6], "etc": [0, 5], "presenc": [0, 6], "keep": [0, 1, 5, 10], "prefix": [0, 7], "AT": 0, "section_align": 0, "subalign": 0, "subsection_align": 0, "region": [0, 6], "lma_region": 0, "phdr": [0, 6], "fillexp": 0, "outputsect": [0, 5], "sh_addr": 0, "elf": [0, 1, 6, 8, 10], "sai": [0, 8, 11], "valu": [0, 4, 6, 8], "must": [0, 3, 6, 8, 9], "congruent": 0, "modulo": 0, "sh_addralign": 0, "caus": [0, 5, 8], "condit": 0, "unsatisfi": 0, "warn": [0, 8, 10], "binutil": [0, 1], "2": [0, 1, 5, 10], "35": [0, 10], "onward": 0, "reduc": [0, 5], "so": [0, 1, 2, 4, 5, 6, 10, 11], "elimin": [0, 5, 10, 11], "contain": [0, 5, 6, 7, 8, 11], "foo": [0, 8, 11], "42": 0, "retain": [0, 1], "unless": [0, 8], "all": [0, 1, 2, 4, 5, 6, 7, 8, 10, 11, 12], "unreferenc": 0, "advanc": 0, "locat": [0, 3, 5, 6], "counter": [0, 5], "shf_write": 0, "flag": [0, 2, 3, 6, 7, 8], "preced": 0, "non": [0, 5, 8, 9, 10, 11], "empti": [0, 5], "also": [0, 2, 3, 5, 8, 10, 11, 12], "sh_type": 0, "sh_flag": 0, "one": [0, 4, 5, 6, 8, 10, 11], "noload": 0, "sht_nobit": 0, "info": [0, 3, 7, 10, 12], "clear": 0, "shf_alloc": 0, "bit": [0, 10, 12], "integ": 0, "sht_progbit": 0, "sht_note": 0, "sht_init_arrai": 0, "sht_fini_arrai": 0, "sht_preinit_arrai": 0, "error": [0, 1, 2, 4, 5, 7, 8, 10, 11], "maximum": [0, 8], "both": [0, 2, 4, 9, 12], "load": [0, 2, 4, 5, 6], "exact": 0, "new": [0, 5, 7, 10], "gener": [0, 5, 7, 8, 11, 12], "lack": 0, "mean": [0, 2, 8, 10], "default": [0, 1, 5, 8, 10], "us": [0, 1, 2, 5, 6, 7, 8, 9], "propag": 0, "previou": [0, 7], "memori": [0, 5, 8, 10], "current": [0, 5, 6, 8, 12], "two": [0, 2, 3, 4, 5, 8], "cannot": [0, 2, 5, 8], "same": [0, 2, 3, 4, 5, 8, 9, 10, 12], "neither": [0, 7, 8], "nor": [0, 6, 7, 8], "between": [0, 3, 4, 5], "vma": 0, "comput": [0, 5], "otherwis": [0, 5, 8, 12], "overwrite_sect": 0, "order": [0, 2, 5, 6, 8, 10], "suppress": [0, 2], "appear": [0, 5], "win": 0, "ad": [0, 1, 2, 3, 5, 6, 7, 10], "somewher": [0, 10, 11], "usual": [0, 5, 6, 12], "placement": [0, 5], "while": [0, 2, 6, 7, 10], "still": [0, 2, 3, 8, 9, 10, 11], "possibli": 0, "It": [0, 2, 3, 5, 8, 9, 10, 11], "recommend": 0, "leav": [0, 10], "brace": 0, "becaus": [0, 2, 5, 6, 8, 10, 11], "its": [0, 3, 5, 6, 8, 10, 11], "ignor": [0, 1, 4, 7, 8], "anywai": 0, "data_segment_relro_end": 0, "offset": [0, 5, 6, 8], "exp": 0, "pt_gnu_relro": 0, "relro": 0, "effect": [0, 5], "data_segment_align": 0, "typic": [0, 5], "writabl": 0, "max": [0, 8], "page": [0, 7], "size": [0, 1, 5, 6, 7, 8, 10, 11], "boundari": 0, "ensur": [0, 11], "next": [0, 2], "overlap": [0, 5], "relro_pad": 0, "immedi": [0, 5], "your": [1, 2, 3, 5, 10, 11], "wl": [1, 6], "fail": [1, 2, 5, 8, 9], "linker": [1, 2, 3, 4, 6, 7, 8, 12], "undefin": [1, 2, 5, 7, 9, 11], "symbol": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12], "__start_meta": 1, "referenc": [1, 7, 8], "encapsul": 1, "need": [1, 2, 3, 5, 7, 10, 12], "under": [1, 10], "properli": 1, "nostart": 1, "see": [1, 5, 8, 10], "http": [1, 3, 5, 8, 10, 11], "llvm": [1, 3, 5, 6, 7, 8, 11, 12], "org": [1, 5, 11], "suffic": 1, "__stop_meta": 1, "sometim": [1, 2, 5], "call": [1, 5, 6, 7, 8, 9, 10, 11], "octob": [1, 10], "2015": [1, 10], "switch": 1, "behavior": [1, 4, 5], "made": [1, 5], "refer": [1, 2, 6, 7, 8, 11, 12], "live": 1, "meta": 1, "conserv": [1, 4], "work": [1, 5, 7, 8, 10, 12], "exist": [1, 5], "take": [1, 5, 8], "fair": [1, 10], "consider": 1, "unnecessarili": [1, 2], "increas": 1, "modern": 1, "metadata": [1, 5], "usag": [1, 4], "desir": 1, "precis": 1, "37": 1, "restor": 1, "tradit": [1, 5, 8], "13": [1, 5], "support": [1, 6, 7, 8, 9, 10], "appl": [1, 3], "ld64": [1, 3], "alwai": [1, 8, 10, 11, 12], "allow": [1, 4, 5, 6, 7, 8, 11], "depend": [1, 2, 5, 6, 8, 10, 11], "anoth": [1, 8], "let": [1, 5], "via": [1, 4, 8, 12], "reloc": [1, 5, 7, 8], "asm": [1, 7], "pushsect": 1, "aw": 1, "n": 1, "r_aarch64_non": 1, "popsect": 1, "inconveni": 1, "__attribute__": [1, 8], "gcc": 1, "11": 1, "clang": [1, 3, 6, 8, 10], "pragma": 1, "diagnost": 1, "push": 1, "wattribut": 1, "static": [1, 8, 12], "const": 1, "char": 1, "dummi": 1, "pop": 1, "do": [1, 4, 5, 10, 12], "recogn": [1, 12], "mai": [1, 2, 5, 6, 7, 10, 11], "On": [1, 5, 6, 8, 10], "target": [1, 8, 10, 12], "prevent": 1, "compil": [1, 3, 6, 7, 8, 10, 11], "discard": [1, 7], "affect": [1, 8], "macro": 1, "you": [1, 2, 3, 10, 11, 12], "_pragma": 1, "command": [1, 2, 3, 5, 6, 8, 10, 12], "script": [1, 6, 8, 10], "sourcewar": 1, "doc": [1, 4, 5], "html": [1, 5], "_": 1, "give": [2, 5], "resolv": [2, 5, 8, 10], "definit": [2, 4, 5, 6, 7, 11, 12], "archiv": [2, 4, 5, 7], "left": 2, "line": [2, 3, 5, 8, 10, 12], "singl": [2, 6], "pass": [2, 4, 5, 6, 8, 10], "maintain": [2, 5], "far": [2, 5], "encount": [2, 9], "object": [2, 5, 6, 7, 10, 11, 12], "surround": 2, "start": [2, 5, 6, 7, 8, 10], "lib": [2, 9, 12], "search": [2, 8], "result": [2, 4, 5, 6, 8, 10, 11], "being": [2, 5, 8, 11], "updat": [2, 10], "move": [2, 3], "return": [2, 5], "exampl": [2, 5, 6, 8, 10, 11], "def": [2, 12], "ref": 2, "o": [2, 6, 7, 10], "cyclic": 2, "wai": [2, 3, 5, 6, 8, 10], "backward": 2, "group": [2, 5, 6], "option": [2, 5, 7, 8, 10, 12], "twice": [2, 3, 10], "rememb": 2, "tabl": [2, 5, 6, 7, 8], "previous": [2, 5, 7], "seen": [2, 5], "includ": [2, 5, 6, 7, 8, 10, 12], "onc": [2, 5, 6], "redund": 2, "consequ": 2, "semant": [2, 4, 5, 6, 8], "outcom": 2, "link": [2, 3, 6, 7, 8, 10, 11, 12], "succe": 2, "even": [2, 8, 10], "wors": 2, "select": 2, "inform": [2, 5, 7, 8], "help": 2, "identifi": 2, "lb": 2, "la": 2, "detect": [2, 7], "system": [2, 3, 7, 10, 12], "b": [2, 7, 11], "To": [2, 5, 6, 10, 12], "exclud": 2, "glob": [2, 7], "match": [2, 7], "check": [2, 3, 4, 5, 8, 10, 11, 12], "enforc": 2, "topolog": 2, "layer": [2, 5], "violat": [2, 4], "albeit": 2, "unabl": 2, "catch": 2, "There": [2, 4, 5, 10], "cycl": 2, "conceptu": 2, "higher": 2, "level": [2, 5], "librari": [2, 6, 7, 9, 10, 11, 12], "lower": 2, "develop": [2, 3, 10], "applic": [2, 11, 12], "p": 2, "directli": [2, 5, 6, 7, 10, 11], "surprisingli": 2, "symbol_defined_in_b": 2, "part": [2, 6, 8, 10, 12], "happen": [2, 5], "compon": [2, 12], "inappropri": 2, "add": [2, 5, 10, 11], "sinc": [2, 5, 8, 10, 12], "c": [2, 3, 5, 6, 7, 8, 10, 11, 12], "suppos": 2, "lowest": 2, "highest": 2, "c_test": 2, "test": 2, "somehow": 2, "could": [2, 5, 6, 7], "fix": [2, 4, 5, 6], "issu": [2, 5], "miss": [2, 5, 9, 10], "howev": [2, 4, 5, 6, 8, 10, 12], "a_test": 2, "b_test": 2, "against": [2, 5, 10, 12], "break": [2, 5], "motiv": 2, "split": [2, 6], "binari": [2, 3, 5, 6, 7, 8, 12], "moreov": 2, "vulner": 2, "resolut": [2, 4, 5], "unintend": 2, "remov": [2, 6, 8, 10], "intention": 2, "omit": 2, "multipl": [2, 5, 6], "whole": [2, 5, 7, 10], "circular": 2, "merg": [2, 4, 5, 8], "best": [2, 5], "sandwich": 2, "a2": 2, "interceptor": 2, "optim": [2, 10], "libc": 2, "function": [2, 5, 6, 10, 12], "know": 2, "about": [2, 4, 5], "pull": 2, "program": [2, 3, 5, 6, 7, 8, 10, 12], "portabl": 2, "abov": [2, 5, 8, 10], "problem": [2, 5, 11], "replic": 2, "benign": 2, "pair": 2, "especi": 2, "common": [2, 5, 7, 8, 11], "among": [2, 10], "lc": 2, "__isnanl": 2, "lm": 2, "_io_funlockfil": 2, "lpthread": 2, "__gcc_personality_v0": 2, "lgcc_eh": 2, "_unwind_getcfa": 2, "lunwind": 2, "odr": [2, 4], "probabl": [2, 10], "dedic": 2, "project": [3, 10], "drop": [3, 10], "replac": [3, 5, 10], "run": [3, 5, 7, 8, 10, 12], "much": [3, 5, 10], "faster": [3, 10], "than": [3, 5, 6, 7, 8, 10], "them": [3, 4, 5, 10, 11], "toolchain": [3, 7, 10], "accept": [3, 10, 12], "argument": [3, 8, 10], "veri": [3, 5, 10], "fast": [3, 10], "multicor": [3, 10], "machin": [3, 10], "expect": [3, 5, 7, 8, 9, 10], "more": [3, 4, 5, 6, 7, 8, 10, 11], "avail": [3, 7, 8, 9, 10], "pre": [3, 10, 12], "built": [3, 10, 12], "go": [3, 5, 6], "latest": 3, "releas": [3, 10, 12], "bundl": 3, "version": [3, 8, 10, 12], "architectur": [3, 6, 10], "platform": [3, 8], "tar": 3, "xz": 3, "decompress": 3, "bin": [3, 10], "note": [3, 5, 6, 8, 10], "out": [3, 4, 7, 8, 10, 12], "accompani": 3, "sibl": 3, "technic": 3, "symlink": 3, "easiest": [3, 10], "entir": [3, 5, 10], "sub": [3, 10], "git": [3, 10, 12], "mirror": [3, 10, 12], "tree": [3, 10], "cmake": [3, 10, 12], "cours": [3, 10], "clone": [3, 10], "github": [3, 8, 10], "com": [3, 8, 10], "mkdir": [3, 10], "cd": [3, 10], "ninja": 3, "dcmake_build_typ": [3, 10], "dllvm_enable_project": [3, 10], "macho": 3, "Then": [3, 10], "find": [3, 8, 9, 12], "output": [3, 5, 6, 7, 8, 10, 12], "fuse": [3, 6, 10], "path": [3, 7, 9, 10], "xcode": 3, "done": [3, 5, 12], "bazel": 3, "linkopt": 3, "rules_apple_link": 3, "v": [3, 7, 10, 12], "list": [4, 5, 8], "signific": 4, "deliber": 4, "report": [4, 7, 8, 9], "By": [4, 8], "opposit": 4, "hide": 4, "chosen": 4, "But": 4, "adopt": 4, "easi": [4, 5, 10, 11], "mimic": [4, 8], "discourag": 4, "sourc": [4, 7, 8, 11, 12], "within": [4, 5, 7], "user": [4, 9], "control": 4, "mitig": 4, "turn": [4, 5, 8], "off": 4, "icf": [4, 5, 7, 10], "dedupl": 4, "slightli": 4, "less": [4, 5], "cstring": 4, "pack": 4, "compactli": 4, "meaning": 4, "how": [4, 5, 6, 8], "rais": 4, "pick": 4, "regardless": 4, "treat": 4, "strong": 4, "extern": [4, 8, 10], "name": [4, 5, 6, 7, 8, 9, 10, 12], "plu": 4, "regular": [4, 5, 6], "instead": [4, 5, 7, 8, 10], "perform": [4, 5, 6], "weak": [4, 7], "special": [4, 5], "mode": [4, 7, 8], "stab": 4, "modif": 4, "hermet": 4, "environ": [4, 7, 8, 9, 10], "variabl": [4, 7], "flip": 4, "prefer": [4, 7], "disabl": [4, 7, 8, 10], "emb": [5, 10], "entri": [5, 6, 8], "point": [5, 6, 8, 11, 12], "lldmain": [5, 10], "polici": [5, 10], "respons": 5, "trustworthi": 5, "guarante": 5, "long": 5, "corrupt": 5, "malici": 5, "fatal": [5, 8], "segv": 5, "That": 5, "said": 5, "don": [5, 8, 10, 12], "t": [5, 7, 8, 10, 12], "worri": 5, "too": [5, 8, 10], "creat": [5, 6, 7, 8, 10, 12], "natur": 5, "rest": 5, "fairli": 5, "piec": [5, 6], "softwar": 5, "mani": [5, 7, 8], "ve": 5, "believ": 5, "high": 5, "achiev": [5, 8], "balanc": 5, "speed": 5, "simplic": 5, "extens": 5, "implement": [5, 6, 7, 10, 11], "nativ": [5, 8, 10], "format": [5, 10, 12], "share": [5, 6, 7, 8], "littl": [5, 10], "sens": 5, "benefit": 5, "worth": 5, "cost": 5, "our": [5, 10], "enough": 5, "thought": 5, "abstract": 5, "wouldn": 5, "complex": 5, "greatli": 5, "simplifi": 5, "One": [5, 8], "most": [5, 7, 8, 11], "thing": [5, 11], "rather": [5, 8], "effici": 5, "therefor": 5, "matter": 5, "local": [5, 10], "try": 5, "broadli": 5, "speak": 5, "anyth": 5, "until": 5, "read": [5, 7, 10, 12], "section": [5, 6, 7, 8, 10, 11], "content": [5, 12], "continu": 5, "costli": 5, "up": [5, 6, 8], "hash": [5, 12], "obtain": 5, "just": [5, 8, 10, 11], "pointer": [5, 6, 8], "actual": [5, 8, 11, 12], "throughout": 5, "unix": [5, 10, 12], "window": [5, 10], "ll": [5, 10, 11], "what": 5, "approach": 5, "dure": 5, "visit": 5, "becom": 5, "would": [5, 8, 10], "type": [5, 7, 8], "extract": [5, 6], "algorithm": [5, 7], "lead": [5, 7, 11], "intuit": 5, "noth": 5, "As": [5, 10], "reorder": 5, "mutual": 5, "tricki": 5, "Or": 5, "loop": 5, "slower": [5, 10], "here": [5, 7, 8, 10, 11], "memor": 5, "doabl": 5, "forget": 5, "justifi": 5, "observ": 5, "carefulli": 5, "craft": 5, "exploit": 5, "realiti": 5, "troubl": 5, "kind": 5, "mainli": 5, "execut": [5, 6, 7, 8, 9, 10, 12], "chrome": 5, "debug": [5, 7, 8, 10, 12], "roughli": 5, "gb": 5, "17": 5, "000": 5, "1": [5, 10], "800": 5, "6": 5, "300": 5, "produc": [5, 8], "15": 5, "second": [5, 9], "These": [5, 8], "vari": [5, 10], "lot": [5, 7], "written": 5, "pretti": 5, "mangl": 5, "wast": [5, 11], "total": 5, "amount": [5, 10], "string": [5, 6, 10], "450": 5, "mb": 5, "5": [5, 8, 10], "causal": 5, "lookup": 5, "slow": 5, "down": 5, "10": 5, "hand": 5, "pursu": 5, "understood": 5, "interact": 5, "understand": 5, "obviou": 5, "class": 5, "repres": 5, "well": [5, 7, 11], "basic": 5, "three": 5, "lazi": 5, "real": [5, 8, 12], "comdat": [5, 11], "absolut": [5, 6, 8], "found": [5, 8], "header": [5, 6, 7, 11], "member": 5, "instanc": 5, "uniqu": 5, "mechan": 5, "cheap": 5, "access": 5, "assum": [5, 6], "automat": [5, 6], "symbolt": 5, "logic": 5, "conflict": 5, "former": 5, "trigger": 5, "chunk": 5, "occupi": 5, "space": [5, 6], "bss": 5, "back": 5, "append": 5, "addit": [5, 8], "mmap": 5, "ed": 5, "base": [5, 8, 10, 11], "inputsect": 5, "synthes": 5, "slice": 5, "themselv": [5, 8], "belong": 5, "actor": 5, "inputfil": 5, "superclass": 5, "reader": 5, "subclass": 5, "own": 5, "writer": 5, "write": 5, "put": [5, 8], "assign": [5, 6, 7], "address": [5, 6, 7, 8], "driver": [5, 7, 10, 12], "driven": 5, "remain": [5, 10], "lto": [5, 7, 10], "bitcod": [5, 7, 10], "normal": [5, 8], "successfulli": [5, 10], "convert": [5, 12], "big": [5, 10], "final": [5, 8], "were": 5, "begin": [5, 8], "detail": [5, 8, 10], "linktimeoptim": 5, "rva": 5, "short": 5, "rel": [5, 6], "virtual": [5, 6], "dll": [5, 7, 12], "posit": 5, "independ": 5, "imag": 5, "0x140000000": 5, "0x18000000": 5, "loader": 5, "accordingli": 5, "raw": 5, "va": 5, "equival": [5, 6], "decid": [5, 6, 10], "consist": [5, 6, 10], "simpler": 5, "plt": [5, 6], "got": [5, 6], "shift": 5, "although": 5, "think": 5, "bad": 5, "todai": 5, "ident": 5, "fold": 5, "known": [5, 7], "techniqu": 5, "few": [5, 10], "percent": 5, "sound": 5, "runtim": [5, 8], "realli": 5, "msvc": [5, 7, 10], "ex": [5, 12], "enabl": [5, 10], "safe": [5, 7, 12], "correctli": [5, 7], "fine": 5, "experiment": [6, 8], "interfac": 6, "subject": 6, "main": [6, 8, 10], "togeth": 6, "number": [6, 10], "data": [6, 8], "without": [6, 7, 10], "overhead": 6, "expos": 6, "dlopen": 6, "dlsym": 6, "dynam": [6, 8], "standard": 6, "android": 6, "android_dlopen_ext": 6, "android_dlext_reserved_address": 6, "translat": [6, 11], "unit": [6, 8, 11], "fsymbol": 6, "sonam": 6, "intend": [6, 11], "reachabl": 6, "similarli": 6, "gc": [6, 8, 10], "unus": [6, 8], "diagram": 6, "illustr": 6, "color": 6, "essenti": [6, 10], "concaten": 6, "combin": [6, 8], "objcopi": 6, "tool": [6, 8, 10], "sequenc": 6, "shown": 6, "ffunction": 6, "fdata": 6, "step": 6, "libfeatur": 6, "libcombin": 6, "libmain": 6, "discov": 6, "index": [6, 7, 10], "arrai": 6, "struct": 6, "partition_index_entri": 6, "int32_t": 6, "name_offset": 6, "addr_offset": 6, "uint32_t": 6, "null": [6, 8], "termin": 6, "deriv": [6, 7], "structur": [6, 12], "store": 6, "__part_index_begin": 6, "__part_index_end": 6, "ttext": 6, "tdata": 6, "tbss": 6, "ambigu": 6, "mip": [6, 10], "unclear": 6, "whether": [6, 10], "multi": [6, 10], "abi": [6, 10, 11], "compat": [6, 8], "254": 6, "due": [6, 7], "limit": [6, 8], "relax": [6, 7], "futur": 6, "statu": 7, "major": 7, "download": 7, "web": 7, "site": [7, 8], "fat": 7, "fatlto": 7, "relocat": [7, 8], "d146778": 7, "bsymbol": 7, "bind": 7, "d158322": 7, "valid": [7, 8, 10], "vtabl": [7, 11], "complement": 7, "visibl": [7, 8], "unsaf": 7, "devirtu": 7, "mark": [7, 8, 9, 10, 11], "d155659": 7, "save": 7, "temp": 7, "emit": [7, 10, 11, 12], "now": 7, "d": 7, "out1": 7, "out2": 7, "78835": 7, "shlib": 7, "dso": 7, "export": [7, 12], "70769": 7, "larger": 7, "57618": 7, "graph": 7, "profil": 7, "instrument": 7, "sampl": 7, "pgo": 7, "cdsort": 7, "better": 7, "hfsort": 7, "d152840": 7, "65866": 7, "lma": 7, "77272": 7, "69295": 7, "aarch64": [7, 10], "mte": 7, "global": [7, 8], "descriptor": 7, "d152921": 7, "r_aarch64_gotpcrel32": 7, "72584": 7, "r_larch_pcrel20_s2": 7, "r_larch_add6": 7, "r_larch_call36": 7, "extrem": 7, "model": [7, 8], "risc": [7, 10], "d159082": 7, "respect": 7, "rvc": 7, "mix": 7, "73977": 7, "r_riscv_got32_pcrel": 7, "72587": 7, "r_riscv_set_uleb128": 7, "r_riscv_sub_uleb128": 7, "72610": 7, "77261": 7, "tlsdesc": 7, "79239": 7, "trace": 7, "associ": 7, "granular": 7, "json": 7, "68236": 7, "dependentloadflag": 7, "wa": [7, 10], "71537": 7, "libpath": 7, "implicitli": 7, "78039": 7, "lldemit": 7, "get": [7, 10, 11], "assembli": 7, "66964": 7, "67079": 7, "id": 7, "buildid": 7, "pdb": [7, 10, 12], "__buildid": [7, 12], "71433": 7, "74652": 7, "duplic": [7, 11], "68077": 7, "__imp_": 7, "dllimport": 7, "redirect": 7, "70777": 7, "71376": 7, "72989": 7, "70430": 7, "source_date_epoch": 7, "pe": [7, 10], "directori": [7, 10], "timestamp": 7, "brepro": 7, "reproduc": 7, "81326": 7, "increment": 7, "toward": 7, "arm64ec": 7, "thinlto": 7, "backend": 7, "d158412": 7, "d158887": 7, "77387": 7, "81475": 7, "longer": 7, "tri": [7, 8], "autodetect": 7, "winsdk": 7, "instal": [7, 8, 10], "shouldn": 7, "ever": 7, "unexpect": 7, "behaviour": 7, "d144084": 7, "op": 7, "70037": 7, "strip": [7, 8], "dwarf": 7, "75181": 7, "68575": 7, "66336": 7, "convent": 8, "wasm32": 8, "wasm": [8, 10], "sever": [8, 10], "_start": 8, "mutabl": 8, "binaryen": 8, "invalid": 8, "hidden": 8, "either": [8, 12], "attribut": 8, "stack": [8, 10], "linear": 8, "compress": 8, "byte": [8, 12], "wide": 8, "potenti": 8, "accommod": 8, "largest": 8, "leb128": 8, "shrink": 8, "pad": 8, "legaci": 8, "correspond": 8, "unresolv": 8, "filenam": 8, "flat": 8, "per": 8, "method": 8, "full": [8, 9], "semanat": 8, "messag": 8, "zero": [8, 9], "trivial": 8, "direct": [8, 11, 12], "trap": 8, "somewhat": 8, "r_wasm_memory_addr_i32": 8, "fpic": 8, "pic": 8, "whose": 8, "api": 8, "initi": 8, "heap": 8, "sum": 8, "unlimit": 8, "attempt": 8, "emul": 8, "strict": 8, "modul": [8, 12], "doesn": [8, 10], "though": [8, 10], "uncommon": 8, "world": [8, 12], "mismatch": 8, "simpli": 8, "unreach": 8, "instruct": 8, "wasm_symbol_export": 8, "export_nam": 8, "altern": [8, 12], "import_nam": 8, "import_modul": 8, "signal": 8, "inspir": 8, "solari": 8, "stand": 8, "question": 8, "imagin": 8, "malloc": 8, "free": 8, "itself": 8, "design": [8, 10], "mind": 8, "preserv": 8, "transit": 8, "With": 8, "correct": 8, "insid": 8, "shf_merg": 8, "No": 8, "spec": 8, "flux": 8, "blob": 8, "dynamiclink": 8, "md": 8, "abil": 9, "hook": 9, "routin": 9, "through": 9, "parent": 9, "tag": 9, "indic": 9, "mylib": 9, "given": [9, 11, 12], "unmangl": 9, "mysymbol": 9, "upon": 9, "success": 9, "interpret": 9, "coff": [10, 12], "mach": 10, "maco": 10, "webassembli": 10, "descend": 10, "port": 10, "progress": 10, "gold": 10, "mileag": 10, "variou": 10, "cpu": 10, "amdgpu": 10, "arm": 10, "hexagon": 10, "loongarch": 10, "32": 10, "64": [10, 12], "endian": 10, "powerpc": 10, "sparc": 10, "v9": 10, "x86": [10, 12], "v4": 10, "product": [10, 12], "qualiti": 10, "seem": 10, "decent": 10, "cross": 10, "fact": 10, "construct": 10, "invok": [10, 12], "small": 10, "libobject": 10, "comparison": 10, "februari": 10, "2017": 10, "21k": 10, "198k": 10, "flto": 10, "old": 10, "ancient": 10, "90": 10, "tune": 10, "21st": 10, "centuri": 10, "tighten": 10, "secur": 10, "socket": 10, "20": 10, "core": 10, "40": 10, "thread": 10, "xeon": 10, "e5": 10, "2680": 10, "80": 10, "ghz": 10, "ssd": 10, "drive": [10, 12], "ran": 10, "w": 10, "ffmpeg": 10, "dbg": 10, "92": 10, "mib": 10, "72": 10, "16": [10, 12], "01": 10, "60": 10, "mysqld": 10, "154": 10, "8": 10, "50": 10, "96": 10, "68": 10, "06": 10, "67": 10, "gib": 10, "104": 10, "03": 10, "34": 10, "18": 10, "23": 10, "49": 10, "14": 10, "82": 10, "28": [10, 11], "chromium": [10, 12], "209": 10, "05": 10, "70": 10, "27": 10, "significantli": 10, "benchmark": 10, "disk": 10, "latenc": 10, "throughput": 10, "gdb": 10, "had": [10, 12], "svn": [10, 12], "did": 10, "haven": [10, 11], "dcmake_install_prefix": 10, "usr": 10, "tell": 10, "overwrit": 10, "ln": 10, "want": 10, "ldflag": 10, "comment": 10, "doubt": 10, "readelf": 10, "dump": 10, "examin": 10, "brief": 10, "rewrit": 10, "notic": 10, "juli": 10, "septemb": 10, "patch": 10, "land": 10, "succeed": 10, "self": 10, "host": 10, "weren": 10, "sure": [10, 11], "abl": 10, "gap": 10, "2016": 10, "improv": 10, "decemb": 10, "freebsd": 10, "kernel": 10, "widen": 10, "pleas": 10, "outdat": 10, "fundament": 10, "concept": 10, "soon": 10, "kei": 10, "partit": 10, "stop": 10, "backref": 10, "someth": 11, "cc": 11, "missingkeyfunct": 11, "inlin": 11, "thu": 11, "re": [11, 12], "won": 11, "forc": 11, "term": 11, "advis": 11, "least": 11, "elig": 11, "serv": 11, "mistak": 11, "public": 11, "quit": 11, "solut": 11, "int": 11, "bar": 11, "forgot": 11, "nomin": 11, "wait": 11, "isn": 11, "flavor": 12, "pars": 12, "further": 12, "almost": 12, "ship": 12, "microsoft": 12, "firefox": 12, "mostli": 12, "exot": 12, "import": 12, "ordin": 12, "resourc": 12, "handler": 12, "seh": 12, "x64": 12, "partial": 12, "heapsiz": 12, "stacksiz": 12, "pariti": 12, "those": 12, "fastlink": 12, "snapshot": 12, "repositori": 12, "12": 12, "dir": 12, "prompt": 12, "open": 12, "sln": 12, "folder": 12, "m": 12, "net": 12, "framework": 12, "2013": 12, "vs2013": 12, "win64": 12, "guid": 12}, "objects": {"": [[8, 0, 1, "cmdoption-allow-undefined", "--allow-undefined"], [8, 0, 1, "cmdoption-allow-undefined-file", "--allow-undefined-file"], [8, 0, 1, "cmdoption-compress-relocations", "--compress-relocations"], [8, 0, 1, "cmdoption-export-all", "--export-all"], [8, 0, 1, "cmdoption-export-dynamic", "--export-dynamic"], [8, 0, 1, "cmdoption-export-table", "--export-table"], [8, 0, 1, "cmdoption-global-base", "--global-base"], [8, 0, 1, "cmdoption-import-memory", "--import-memory"], [8, 0, 1, "cmdoption-import-table", "--import-table"], [8, 0, 1, "cmdoption-import-undefined", "--import-undefined"], [8, 0, 1, "cmdoption-initial-heap", "--initial-heap"], [8, 0, 1, "cmdoption-initial-memory", "--initial-memory"], [8, 0, 1, "cmdoption-max-memory", "--max-memory"], [8, 0, 1, "cmdoption-no-entry", "--no-entry"], [8, 0, 1, "cmdoption-no-merge-data-segments", "--no-merge-data-segments"], [8, 0, 1, "cmdoption-stack-first", "--stack-first"], [8, 0, 1, "cmdoption-unresolved-symbols", "--unresolved-symbols"]]}, "objtypes": {"0": "std:cmdoption"}, "objnames": {"0": ["std", "cmdoption", "program option"]}, "titleterms": {"linker": [0, 5, 10, 11], "script": [0, 9], "implement": 0, "note": [0, 7], "polici": 0, "symbol": [0, 4], "assign": 0, "section": [0, 1], "command": 0, "output": 0, "descript": 0, "address": 0, "type": 0, "align": [0, 4], "lma": 0, "overwrit": 0, "built": 0, "function": [0, 8, 11], "z": 1, "start": 1, "stop": 1, "gc": 1, "annot": 1, "c": 1, "identifi": 1, "name": 1, "warn": 2, "backref": 2, "mach": 3, "o": 3, "lld": [3, 4, 7, 8, 10, 12], "port": [3, 8], "featur": [3, 8, 10], "download": [3, 12], "build": [3, 10, 12], "us": [3, 10, 12], "ld64": 4, "v": 4, "macho": [4, 7], "dead": 4, "strip": 4, "duplic": 4, "no_dedupl": 4, "flag": [4, 12], "string": 4, "objc": 4, "treatment": 4, "alias": 4, "zero_ar_d": 4, "enabl": 4, "default": 4, "The": [5, 10], "elf": [5, 7], "coff": [5, 7], "wasm": 5, "librari": [5, 8], "design": 5, "kei": [5, 11], "concept": 5, "number": 5, "you": 5, "want": 5, "know": 5, "import": [5, 8], "data": 5, "structur": 5, "link": 5, "time": 5, "optim": 5, "glossari": 5, "other": 5, "info": 5, "partit": 6, "usag": [6, 8], "restrict": 6, "18": 7, "1": 7, "releas": 7, "introduct": 7, "non": 7, "comprehens": 7, "list": 7, "chang": 7, "thi": 7, "improv": 7, "break": 7, "mingw": 7, "webassembli": [7, 8], "fix": 7, "object": 8, "file": 8, "format": 8, "behaviour": 8, "signatur": 8, "export": 8, "stub": 8, "garbag": 8, "collect": 8, "weak": 8, "undefin": 8, "miss": [8, 11], "error": 9, "handl": 9, "gener": 9, "requir": 9, "argument": 9, "return": 9, "valu": 9, "llvm": 10, "perform": 10, "histori": 10, "intern": 10, "fail": 11, "defin": 11, "virtual": 11, "destructor": 11, "forget": 11, "declar": 11, "an": 11, "abstract": 11, "class": 11, "pure": 11, "i": 11, "doesn": 11, "t": 11, "see": 11, "window": 12, "support": 12, "develop": 12, "statu": 12, "visual": 12, "studio": 12, "id": 12, "msbuild": 12, "ninja": 12, "extens": 12}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx": 58}, "alltitles": {"Linker Script implementation notes and policy": [[0, "linker-script-implementation-notes-and-policy"]], "Symbol assignment": [[0, "symbol-assignment"]], "SECTIONS command": [[0, "sections-command"]], "Output section description": [[0, "output-section-description"]], "Output section address": [[0, "output-section-address"]], "Output section type": [[0, "output-section-type"]], "Output section alignment": [[0, "output-section-alignment"]], "Output section LMA": [[0, "output-section-lma"]], "Overwrite sections": [[0, "overwrite-sections"]], "Built-in functions": [[0, "built-in-functions"]], "-z start-stop-gc": [[1, "z-start-stop-gc"]], "Annotate C identifier name sections": [[1, "annotate-c-identifier-name-sections"]], "\u2013warn-backrefs": [[2, "warn-backrefs"]], "Mach-O LLD Port": [[3, "mach-o-lld-port"]], "Features": [[3, "features"], [10, "features"]], "Download": [[3, "download"]], "Build": [[3, "build"], [10, "build"]], "Using LLD": [[3, "using-lld"], [10, "using-lld"]], "ld64 vs LLD-MachO": [[4, "ld64-vs-lld-macho"]], "Dead Stripping Duplicate Symbols": [[4, "dead-stripping-duplicate-symbols"]], "-no_deduplicate Flag": [[4, "no-deduplicate-flag"]], "String Alignment": [[4, "string-alignment"]], "ObjC Symbols Treatment": [[4, "objc-symbols-treatment"]], "Aliases": [[4, "aliases"]], "ZERO_AR_DATE enabled by default": [[4, "zero-ar-date-enabled-by-default"]], "The ELF, COFF and Wasm Linkers": [[5, "the-elf-coff-and-wasm-linkers"]], "The ELF Linker as a Library": [[5, "the-elf-linker-as-a-library"]], "Design": [[5, "design"]], "Key Concepts": [[5, "key-concepts"]], "Numbers You Want to Know": [[5, "numbers-you-want-to-know"]], "Important Data Structures": [[5, "important-data-structures"]], "Link-Time Optimization": [[5, "link-time-optimization"]], "Glossary": [[5, "glossary"]], "Other Info": [[5, "other-info"]], "Partitions": [[6, "partitions"]], "Usage": [[6, "usage"], [8, "usage"]], "Restrictions": [[6, "restrictions"]], "lld 18.1.1 Release Notes": [[7, "lld-release-release-notes"]], "Introduction": [[7, "introduction"]], "Non-comprehensive list of changes in this release": [[7, "non-comprehensive-list-of-changes-in-this-release"]], "ELF Improvements": [[7, "elf-improvements"]], "Breaking changes": [[7, "breaking-changes"]], "COFF Improvements": [[7, "coff-improvements"]], "MinGW Improvements": [[7, "mingw-improvements"]], "MachO Improvements": [[7, "macho-improvements"]], "WebAssembly Improvements": [[7, "webassembly-improvements"]], "Fixes": [[7, "fixes"]], "WebAssembly lld port": [[8, "webassembly-lld-port"]], "Object file format": [[8, "object-file-format"]], "Behaviour": [[8, "behaviour"]], "Function Signatures": [[8, "function-signatures"]], "Exports": [[8, "exports"]], "Imports": [[8, "imports"]], "Stub Libraries": [[8, "stub-libraries"]], "Garbage Collection": [[8, "garbage-collection"]], "Weak Undefined Functions": [[8, "weak-undefined-functions"]], "Missing features": [[8, "missing-features"]], "Error Handling Script": [[9, "error-handling-script"]], "Generic Requirements": [[9, "generic-requirements"]], "Arguments": [[9, "arguments"]], "Return Value": [[9, "return-value"]], "LLD - The LLVM Linker": [[10, "lld-the-llvm-linker"]], "Performance": [[10, "performance"]], "History": [[10, "history"]], "Internals": [[10, "internals"]], "Missing Key Function": [[11, "missing-key-function"]], "Failing to define a virtual destructor": [[11, "failing-to-define-a-virtual-destructor"]], "Forgetting to declare a virtual function in an abstract class as pure": [[11, "forgetting-to-declare-a-virtual-function-in-an-abstract-class-as-pure"]], "Key function is defined, but the linker doesn\u2019t see it": [[11, "key-function-is-defined-but-the-linker-doesn-t-see-it"]], "Windows support": [[12, "windows-support"]], "Development status": [[12, "development-status"]], "Downloading LLD": [[12, "downloading-lld"]], "Building LLD": [[12, "building-lld"]], "Using Visual Studio IDE/MSBuild": [[12, "using-visual-studio-ide-msbuild"]], "Using Ninja": [[12, "using-ninja"]], "Extensions": [[12, "extensions"]], "LLD flags": [[12, "lld-flags"]]}, "indexentries": {"--allow-undefined": [[8, "cmdoption-allow-undefined"]], "--allow-undefined-file": [[8, "cmdoption-allow-undefined-file"]], "--compress-relocations": [[8, "cmdoption-compress-relocations"]], "--export-all": [[8, "cmdoption-export-all"]], "--export-dynamic": [[8, "cmdoption-export-dynamic"]], "--export-table": [[8, "cmdoption-export-table"]], "--global-base": [[8, "cmdoption-global-base"]], "--import-memory": [[8, "cmdoption-import-memory"]], "--import-table": [[8, "cmdoption-import-table"]], "--import-undefined": [[8, "cmdoption-import-undefined"]], "--initial-heap": [[8, "cmdoption-initial-heap"]], "--initial-memory": [[8, "cmdoption-initial-memory"]], "--max-memory": [[8, "cmdoption-max-memory"]], "--no-entry": [[8, "cmdoption-no-entry"]], "--no-merge-data-segments": [[8, "cmdoption-no-merge-data-segments"]], "--stack-first": [[8, "cmdoption-stack-first"]], "--unresolved-symbols": [[8, "cmdoption-unresolved-symbols"]], "command line option": [[8, "cmdoption-allow-undefined"], [8, "cmdoption-allow-undefined-file"], [8, "cmdoption-compress-relocations"], [8, "cmdoption-export-all"], [8, "cmdoption-export-dynamic"], [8, "cmdoption-export-table"], [8, "cmdoption-global-base"], [8, "cmdoption-import-memory"], [8, "cmdoption-import-table"], [8, "cmdoption-import-undefined"], [8, "cmdoption-initial-heap"], [8, "cmdoption-initial-memory"], [8, "cmdoption-max-memory"], [8, "cmdoption-no-entry"], [8, "cmdoption-no-merge-data-segments"], [8, "cmdoption-stack-first"], [8, "cmdoption-unresolved-symbols"]]}})
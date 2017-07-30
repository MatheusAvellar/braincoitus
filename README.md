# braincoitus

<p align="center">
    <i>Not quite as hard as brainfuck</i>
</p>

## Purpose

Recently, I've been working with brainfuck quite a lot. And it got me thinking: "Heck, do I really have to type and count 100 '>'
signs every time I want to move to some far away cell? Isn't there a quicker way?"

And to be completely honest, I did no research to find out. I took it as my mission to develop a simple solution that cound end
my suffering.

With that, came **BrainCoitus**. It is a superset of brainfuck, meaning that every brainfuck code is also valid braincoitus, but
it implements a simple rule:

- Any brainfuck command, with the exception of the loop `[ ]`, can be repeated *n* times by using the syntax:<br>
    ```( operation  n )```<br>
    Where *operation* is one of `+ - . , < >` and *n* is a positive integer.

## Upsides

- You type less code for the same results;
- The compilation braincoitus -> brainfuck is so quick and lightweight, you won't even notice it;
- It's currently the middle of the night and I'm bored.

## Downsides

- Having to translate back to brainfuck? I suppose that could be a downside;
- I mean, this is my child right here, how could I see any flaws in it? It's perfect.

## Examples

While in vanilla brainfuck it might not be smart in a size-wise perspective to simply add a million times to the same cell,
in braincoitus this becomes trivial and quite small. Thus, a simple **Hello, World!** can be as short as 64 bytes long¹:

    [ braincoitus code (64 bytes) ]
    (+72).(+29).(+7)..+++.>(+44).(-12).(+55).<.+++.(-6).(-8).>(-54).

    [ brainfuck compiled (309 bytes) ]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++.+++++++..+++.>++++++++++++++++++++++++++++++++++++++++++++.------------.+++++++++++++++++++++++++++++++++++++++++++++++++++++++.<.+++.------.--------.>------------------------------------------------------.

    [ Output ]
    Hello, World!

<br>

    [ braincoitus code (51 bytes) ]
    (+98).>(+114).<-.>(-9).(+5).<++.>+.(-6).(+11).+.--.
    
    [ brainfuck compiled (266 bytes) ]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.<-.>---------.+++++.<++.>+.------.+++++++++++.+.--.
    
    [ Output ]
    braincoitus
<br>
Or perhaps you'd prefer a real use case:

`yapi.b`, by [Felix Nawothnig](mailto:felix.nawothnig@t-online.de), a program that calculates digits of pi.

    [ braincoitus code (554 bytes) ]
    >(+15)[<+(>8)(+10)(<7)-]>(+5)[<(+9)>-]+(>6)+[<<+++[>>[-<]<[>]<-]>>[>+>]<[<]>]>[[->>>>+<<<<]>>>+++>-]<[<<<<](<8)+[-(>12)[<+[->>>>+<<<<](>5)]<<<<[(>5)[<<<<+>>>>-](<5)-[<<(+10)>>-]>>>[<<[<+<<+>>>-]<[>+<-]<++<<+(>6)-]<<[-]<<-<[->>+<-[>>>]>[[<+>-]>+>>](<5)]>[-]>+<<<-[>>+<<-]<]<<<<+(>8)[-]>[<<<+>>>-]<<(+10)<[->>+<-[>>>]>[[<+>-]>+>>](<5)]>[-]>+>[<<+<+>>>-]<<<<+<+>>[-[-[-[-[-[-[-[-[-<->[-<+<->>]]]]]]]]]]<[(+5)[<<<(+8)<(+8)>>>>-]<<<<+<->>>>[>+<<<(+9)<->>>-](<5)[>>+<<-]+<[->-<]>[>>.<<<<[+.[-]]>>-]>[>>.<<-]>[-]>[-]>>>[>>[(<8)+(>8)-]<<-]]>>[-]<<<[-](<8)](+10).
    
    [ brainfuck compiled (648 bytes) ]
    >+++++++++++++++[<+>>>>>>>>++++++++++<<<<<<<-]>+++++[<+++++++++>-]+>>>>>>+[<<+++[>>[-<]<[>]<-]>>[>+>]<[<]>]>[[->>>>+<<<<]>>>+++>-]<[<<<<]<<<<<<<<+[->>>>>>>>>>>>[<+[->>>>+<<<<]>>>>>]<<<<[>>>>>[<<<<+>>>>-]<<<<<-[<<++++++++++>>-]>>>[<<[<+<<+>>>-]<[>+<-]<++<<+>>>>>>-]<<[-]<<-<[->>+<-[>>>]>[[<+>-]>+>>]<<<<<]>[-]>+<<<-[>>+<<-]<]<<<<+>>>>>>>>[-]>[<<<+>>>-]<<++++++++++<[->>+<-[>>>]>[[<+>-]>+>>]<<<<<]>[-]>+>[<<+<+>>>-]<<<<+<+>>[-[-[-[-[-[-[-[-[-<->[-<+<->>]]]]]]]]]]<[+++++[<<<++++++++<++++++++>>>>-]<<<<+<->>>>[>+<<<+++++++++<->>>-]<<<<<[>>+<<-]+<[->-<]>[>>.<<<<[+.[-]]>>-]>[>>.<<-]>[-]>[-]>>>[>>[<<<<<<<<+>>>>>>>>-]<<-]]>>[-]<<<[-]<<<<<<<<]++++++++++.
    
    [ Output ]
    3.14070455282885
<br><br><br>
¹ This is the best my half-asleep mind could produce, I'm sorry.

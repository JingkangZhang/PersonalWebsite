# Secure Or Not Secure [^1]

Secure, or not secure, that is the question:
Whether ’tis safer on the stack[^2] to store
The secret passwords of our precious users,
Or to solidify our memory
And with canaries[^3] harden it. Tis safe?
No more; or by a DEP[^4] to say we end
The heart-ache and the thousand natural bugs
That C is heir to: ‘tis [^5] a consummation
Devoutly to be wish’d. To code, to run;
To run, perchance to crash—ay, there’s the rub:
For in that run of code what bugs may come,
When we have hardened up this legacy,
Must give us pause—there’s the chance that[^6]
Some other bugs bring down our tested app.
For who would bear the collisions of hashes[^7],
The brute-forced passwords and seq numbers[^8], fie,
RESET’d connections by th'man in the middle[^9],
The bypass’d firewalls, and the so little
Amount of money that D-DOS[^10] can cost,
When we ourself might our quietus make
Without concerns for a well-secure’d system?
To grunt and sweat under a weary life,
But for the dread of some improbable
Attacks, from whose 0-days[^11] no one has suffer’d?
Thus conscience does make cowards of us all,
And thus the speed of our development
Is slowed down with the pale cast of thought[^12],
And enterprises of great pitch and moment
With this regard their currents turn awry
And lose the name of action. —Soft you now,
Fair EvanBot[^13]!— In thy inspections be
All my bugs fixed.

[^1]: Adapted from Hamlet's [To Be Or Not To Be](https://www.poetryfoundation.org/poems/56965/speech-to-be-or-not-to-be-that-is-the-question)
[^2]: A [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)#Security)
[^3]: [Stack canaries](https://en.wikipedia.org/wiki/Stack_buffer_overflow#Stack_canaries)
[^4]: [DEP](https://docs.microsoft.com/en-us/windows/win32/memory/data-execution-prevention)
[^5]: the "da DUM" iambic foot is split among two sentences, bad
[^6]: not pentameter: only has 8 syllables
[^7]: [hash collision](https://en.wikipedia.org/wiki/Collision_attack)
[^8]: tcp attack involves [guessing the sequnce number](https://security.stackexchange.com/questions/133594/tcp-off-path-attack-cve-2016-5696)
[^9]: [tcp reset attack](https://en.wikipedia.org/wiki/TCP_reset_attack) (doesn't have to be [MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack))
[^10]: [DDOS](https://en.wikipedia.org/wiki/Denial-of-service_attack)
[^11]: [zero day](https://en.wikipedia.org/wiki/Zero-day_(computing))
[^12]: "pale cast of thought" is properly used in the original text, but doesn't quite fit here, because it doesn't "slow" anything down.
[^13]: EvanBot: mascot for [Berkeley CS161 (Computer Security) during Sp2020](https://sp20.cs161.org/)
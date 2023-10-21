<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AgentRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=AgentRepository::class)
 * @ApiResource(formats={"json"})
 */
class Agent
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $posterh;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="agents")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $user;

    /**
     * @ORM\Column(type="integer")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user_id;

    /**
     * @ORM\OneToMany(targetEntity=Offre::class, mappedBy="agent", orphanRemoval=true)
     */
    private $offres;

    /**
     * @ORM\OneToMany(targetEntity=Entretien::class, mappedBy="agent", orphanRemoval=true)
     */
    private $entretiens;

 

    public function __construct()
    {
        $this->offres = new ArrayCollection();
        $this->entretiens = new ArrayCollection();
     
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPosterh(): ?string
    {
        return $this->posterh;
    }

    public function setPosterh(?string $posterh): self
    {
        $this->posterh = $posterh;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    /**
     * @return Collection|Offre[]
     */
    public function getOffres(): Collection
    {
        return $this->offres;
    }

    public function addOffre(Offre $offre): self
    {
        if (!$this->offres->contains($offre)) {
            $this->offres[] = $offre;
            $offre->setAgent($this);
        }

        return $this;
    }

    public function removeOffre(Offre $offre): self
    {
        if ($this->offres->removeElement($offre)) {
            // set the owning side to null (unless already changed)
            if ($offre->getAgent() === $this) {
                $offre->setAgent(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Entretien[]
     */
    public function getEntretiens(): Collection
    {
        return $this->entretiens;
    }

    public function addEntretien(Entretien $entretien): self
    {
        if (!$this->entretiens->contains($entretien)) {
            $this->entretiens[] = $entretien;
            $entretien->setAgent($this);
        }

        return $this;
    }

    public function removeEntretien(Entretien $entretien): self
    {
        if ($this->entretiens->removeElement($entretien)) {
            // set the owning side to null (unless already changed)
            if ($entretien->getAgent() === $this) {
                $entretien->setAgent(null);
            }
        }

        return $this;
    }

    
}
